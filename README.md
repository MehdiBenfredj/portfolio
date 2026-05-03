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

| Source              | What Hugo does with it                                          |
| ------------------- | --------------------------------------------------------------- |
| `content/*.html`    | Wrapped with `layouts/_default/baseof.html`, rendered to a page |
| `layouts/`          | Templates — control page structure, head, nav, footer           |
| `static/`           | Copied **as-is** into `public/` (CSS, JS, images, posts, CNAME) |
| `hugo.toml`         | Site config (title, baseURL, etc.)                              |

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
layouts/
  _default/
    baseof.html    shared layout: <head>, header, nav, footer
    single.html    wraps content pages with baseof.html
  index.html       wraps the home page with baseof.html
  404.html         standalone bare layout (no nav) — 404 page

content/
  _index.html      home — the mixed feed (everything, reverse-chrono)
  writing.html     longer-form essays + thoughts
  post.html        single-post viewer (?slug=YYYY-MM-DD-slug)
  projects.html    things I made
  stack.html       hardware, software, services I use
  bookmarks.html   filtered feed: links / videos / tweets / buys
  about.html       about me
  contact.html     say hi

hugo.toml          Hugo config (title, baseURL, uglyURLs)

static/
  CNAME            custom domain for GitHub Pages
  posts/
    index.json     post metadata (date, kind, title, tags, url, etc.)
    README.md      full guide for adding posts
    *.md           post body content (no front-matter)
  assets/
    tokens.css     design tokens (colors, type) + global styles + mobile
    index.css      home page styles
    writing.css    writing page styles
    post.css       single-post viewer styles
    about.css      about page styles
    contact.css    contact page styles
    projects.css   projects page styles
    stack.css      stack page styles
    bookmarks.css  bookmarks page styles
    404.css        404 page styles
    posts.js       markdown loader + renderer
    data.js        projects + stack data
```

---

## Adding content

### Posts (the home feed)

Everything on the home feed — thoughts, essays, links, videos, photos, things you bought, one-liner notes — is a Markdown file in `static/posts/`.

**To add a post:**

1. Create a new file in `static/posts/` named `YYYY-MM-DD-some-slug.md`. Write plain Markdown — **no front-matter**.

   ```markdown
   Your body in markdown. **Bold**, _italic_, [links](https://example.com),
   lists, headings, code blocks — all supported.
   ```

2. Add an entry to `static/posts/index.json`:

   ```json
   {
     "file": "2026-05-01-my-post.md",
     "date": "2026-05-01",
     "kind": "thought",
     "title": "My title here",
     "tags": ["ai", "thinking"]
   }
   ```

3. Commit + push. GitHub Actions builds and deploys in ~30 seconds.

**Post kinds** (controls how it renders):

| `kind:`   | What it is                | Required fields                       |
| --------- | ------------------------- | ------------------------------------- |
| `thought` | A short reflection        | `title`, body                         |
| `post`    | A long essay (own page)   | `title`, body                         |
| `tweet`   | A one-liner, no title     | body                                  |
| `link`    | Article you want to share | `title`, `url`, `source`              |
| `video`   | YouTube link              | `title`, `url`, `source: youtube.com` |
| `photo`   | An image                  | `image`, optional `title`, body       |
| `buy`     | Something you got         | `title`, `url`, `source`              |

Optional fields on any entry: `tags`, `image` (gives links a preview thumbnail).

YouTube thumbnails are generated automatically from the `url`.

Full guide: see [`static/posts/README.md`](static/posts/README.md).

### Projects + stack

These live in `static/assets/data.js`:

- `PROJECTS` — your projects list (shown on `projects.html`)
- `STACK` — hardware/software/services (shown on `stack.html`)

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

The site uses `fetch()` to load Markdown, so opening `index.html` directly via `file://` won't work. Use Hugo's built-in server:

```bash
hugo serve
# → http://localhost:1313
```

---

## License

MIT. Steal it. Rip it apart. Make your own.
