# Mehdi — personal site

A messy corner of the internet. Writing, links, videos, photos, projects, stack — all in one stream. Inspired by [taniarascia.com](https://www.taniarascia.com) and [brianlovin.com](https://brianlovin.com).

Built with **Hugo** (for layout inheritance), plain CSS, and a sprinkle of JavaScript. Posts are Markdown files in a folder. No tracking. No CMS. No dark mode — light only, by choice.

Live at **[www.mehdibenfredj.com](https://www.mehdibenfredj.com)**.

---

## How it works (Hugo + GitHub Pages)

Hugo is a static site generator. It takes the source files in this repo and produces a folder of plain HTML/CSS/JS that any web server can serve. The flow:

1. **You edit source files** — `content/`, `layouts/`, `static/`, `hugo.toml`.
2. **Hugo builds** — running `hugo` (locally) or the GitHub Action (on push) reads those sources and writes the rendered site into `public/`.
3. **GitHub Pages serves `public/`** — the Action uploads that folder as the Pages artifact and deploys it to `www.mehdibenfredj.com`.

### The `public/` folder is build output — never edit it

`public/` is **regenerated from scratch on every build**. Anything in there that didn't come from `content/`, `layouts/`, `static/`, or `hugo.toml` will be wiped on the next build.

This repo `.gitignore`s `public/` so it isn't tracked in git. If you find yourself wanting to edit a file in `public/`, that's a sign you're editing the wrong place — find the source under `static/`, `content/`, or `layouts/` and edit that instead.

For example: `static/assets/data.js` is the source; `public/assets/data.js` is a copy Hugo makes during build. Editing the copy does nothing — the next build overwrites it.

### What goes where

| Source                  | What Hugo does with it                                                              |
| ----------------------- | ----------------------------------------------------------------------------------- |
| `content/*.html`        | Wrapped with `layouts/_default/baseof.html` (or a custom `layout:` from front-matter), rendered to a page |
| `content/posts/*.md`    | One feed entry each. Front-matter holds metadata, body holds markdown               |
| `layouts/`              | Templates — control page structure and **all** dynamic logic (see below)            |
| `data/`                 | Structured data (TOML/YAML/JSON) read by templates at build time                    |
| `static/`               | Copied **as-is** into `public/` (CSS, JS, images, CNAME)                            |
| `hugo.toml`             | Site config (title, baseURL, permalinks, etc.)                                      |

### Important: dynamic logic goes in `layouts/`, not `content/`

Hugo does **not** process Go template syntax (`{{ ... }}`) inside `content/*.html` files. Content bodies are inserted into the layout as static strings. If you put a `{{ range ... }}` inside `content/projects.html`, it will appear literally in the rendered page.

So this site uses a "thin content, fat layout" pattern for any page that needs dynamic rendering:

- `content/projects.html` is just front-matter (`title`, `active_nav`, `layout: projects`).
- `layouts/_default/projects.html` does all the work — it iterates `data/projects.toml` and renders the cards.

Pages that don't need any dynamic logic (`content/about.html`, `content/contact.html`) keep their full HTML body and use the default `layouts/_default/single.html`, which just emits `{{ .Content | safeHTML }}`.

### How the feed renders

The home, `/writing/`, and `/bookmarks/` pages all read from `content/posts/`. They're plain Hugo templates — no client-side JS for rendering, no `fetch()`, no separate index file.

The home feed dispatches each post to a per-feed partial:

```
layouts/partials/feed/
  thought.html   tweet.html   post.html
  link.html      video.html   photo.html   buy.html
```

To change how `link` cards look, edit `layouts/partials/feed/link.html`. The `_meta.html` partial is the shared meta-row (date + feed tag + tags) used by all cards.

Individual post pages (`/posts/<slug>/`) are rendered by `layouts/posts/single.html`.

Filter pills on the home and bookmarks pages stay client-side (a few lines of JS that toggle `display:none` on `[data-kind]` cards).

### The deploy pipeline

`.github/workflows/deploy.yml` runs on every push to `main`:

1. Checks out the repo
2. Installs Hugo (extended, pinned version)
3. Runs `hugo --minify` → produces `public/`
4. Uploads `public/` as a Pages artifact
5. Deploys it to GitHub Pages

Total time: ~30 seconds. Watch it in the **Actions** tab.

---

## Quick start

```bash
git clone https://github.com/mehdibenfredj/portfolio.git
cd portfolio

# Install Hugo (one-time)
brew install hugo

# Run the local server
hugo serve
# → http://localhost:1313
```

---

## Project structure

```
content/
  _index.html      home — front-matter only; layout renders the feed
  writing.html     front-matter only; layout renders the writing list
  projects.html    front-matter only; layout renders projects from data/
  stack.html       front-matter only; layout renders stack from data/
  bookmarks.html   front-matter only; layout renders the bookmarks feed
  about.html       static HTML body (no template logic)
  contact.html     static HTML body (no template logic)
  posts/           one Markdown file per feed entry (front-matter + body)

layouts/
  _default/
    baseof.html    shared layout: <head>, header, nav, footer
    single.html    minimal — for content pages with static HTML body
    writing.html   selected via `layout: writing` — renders writing list
    bookmarks.html selected via `layout: bookmarks` — renders bookmarks
    projects.html  selected via `layout: projects` — reads data/projects.toml
    stack.html     selected via `layout: stack` — reads data/stack.toml
  index.html       homepage — renders hero + the mixed feed
  posts/
    single.html    template for individual post pages (/posts/<slug>/)
  partials/
    feed/          one partial per feed: thought / post / tweet /
                   link / video / photo / buy — each renders one card
  404.html         standalone bare layout (no nav) — 404 page

data/
  projects.toml    projects shown at /projects/
  stack.toml       hardware/software/services shown at /stack/

hugo.toml          Hugo config (title, baseURL, permalinks)

static/
  CNAME            custom domain for GitHub Pages
  assets/
    tokens.css     design tokens (colors, type) + global styles + mobile
    *.css          per-page styles (index, writing, post, about, …)
```

---

## Adding content

### Posts (the home feed)

Everything on the home feed — thoughts, essays, links, videos, photos, things you bought, one-liner notes — is a single Markdown file in `content/posts/` with YAML front-matter.

**To add a post:**

1. Create `content/posts/YYYY-MM-DD-slug.md`. The file's slug becomes its URL: `/posts/<slug>/`.

   ```markdown
   ---
   date: 2026-05-01
   feed: thought
   title: "My title here"
   tags: [ai, thinking]
   ---

   Your body in markdown. **Bold**, _italic_, [links](https://example.com),
   lists, headings, code blocks — all supported.
   ```

2. Commit + push. GitHub Actions builds Hugo and deploys in ~30 seconds.

That's it. No index file to maintain — Hugo discovers posts by scanning the directory.

**Post feeds** (the `feed:` field in front-matter controls which partial renders the card):

| `feed:`   | What it is                | Required front-matter                                    |
| --------- | ------------------------- | -------------------------------------------------------- |
| `thought` | A short reflection        | `date`, `feed`, `title` + body                           |
| `post`    | A long essay (own page)   | `date`, `feed`, `title` + body                           |
| `tweet`   | A one-liner, no title     | `date`, `feed` + body                                    |
| `link`    | Article you want to share | `date`, `feed`, `title`, `url`, `source`                 |
| `video`   | YouTube link              | `date`, `feed`, `title`, `url`, `source: youtube.com`    |
| `photo`   | An image                  | `date`, `feed`, `image` (+ optional `title`, body)       |
| `buy`     | Something you got         | `date`, `feed`, `title`, `url`, `source`                 |

Optional on any entry: `tags`, `image` (gives links a preview thumbnail).

YouTube thumbnails are generated **at build time** from the `url`.

The home feed (`/`), `/writing/`, and `/bookmarks/` pages all read from the same `content/posts/` directory and filter by `feed`.

### Projects + stack

These live in `data/`:

- `data/projects.toml` — your projects list (rendered at `/projects/`)
- `data/stack.toml` — hardware/software/services (rendered at `/stack/`)

Both are read at build time by `layouts/_default/projects.html` and `layouts/_default/stack.html` and rendered server-side. No client-side JS.

To add a project, edit `data/projects.toml`:

```toml
[[projects]]
name = "My new thing"
year = "2026"
desc = "What it does."
href = "https://example.com"
tag = "active"   # active | shipped | archived
```

### Bio, contact, about

Edit the HTML directly:

- **Header + nav + footer** — `layouts/_default/baseof.html`
- **About page** — `content/about.html`
- **Contact page** — `content/contact.html`

---

## Deploy

This repo deploys to **www.mehdibenfredj.com** via GitHub Pages. A GitHub Actions workflow builds Hugo and publishes on every push to `main`.

### Custom domain setup (already in place)

- `static/CNAME` contains `www.mehdibenfredj.com` (Hugo copies it into `public/` on every build).
- DNS at the registrar (IONOS):
  - Apex `@` → A records pointing to GitHub Pages: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - `www` → CNAME to `mehdibenfredj.github.io`
- GitHub repo → Settings → Pages: custom domain `www.mehdibenfredj.com`, **Enforce HTTPS** enabled.

### Forking for your own site

1. Fork or clone this repo.
2. Replace `static/CNAME` with your own domain (or delete it for a `*.github.io` URL).
3. Update `baseURL` in `hugo.toml`.
4. Configure DNS at your registrar:
   - Apex: A records → GitHub's four IPs above
   - `www`: CNAME → `YOUR-USERNAME.github.io`
5. In GitHub → Settings → Pages, set the custom domain and enforce HTTPS.

---

## Customizing the design

- **Colors** — `static/assets/tokens.css` (`:root` block). Change `--accent` for a quick re-skin.
- **Fonts** — Inter (sans) + Source Serif (body) + JetBrains Mono, loaded from Google Fonts in `layouts/_default/baseof.html`.
- **Page-specific styles** — each page declares `extra_css: /assets/PAGENAME.css` in its front-matter; the layout picks it up automatically.
- **Mobile** — single breakpoint at 720px (with a tighter one at 420px) at the bottom of `tokens.css`.

---

## Local preview

Use Hugo's built-in server — it watches files and live-reloads on save:

```bash
hugo serve
# → http://localhost:1313
```

---

## License

MIT. Steal it. Rip it apart. Make your own.
