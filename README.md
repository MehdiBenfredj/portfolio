# Mehdi — personal site

A messy corner of the internet. Writing, links, videos, photos, projects, stack — all in one stream. Inspired by [taniarascia.com](https://www.taniarascia.com) and [brianlovin.com](https://brianlovin.com).

Built with **Hugo** (for layout inheritance), plain CSS, and a sprinkle of JavaScript. Posts are Markdown files in a folder. No tracking. No CMS.

---

## Quick start

```bash
# 1. Clone (or download) this repo
git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
cd YOUR-REPO

# 2. Install Hugo (one-time) — requires Go toolchain via Homebrew
brew install hugo

# 3. Run the local server
hugo serve

# 4. Open http://localhost:1313
```

Then start replacing `[TODO]` placeholders with your stuff. Search for `[TODO` to find them all.

---

## Project structure

```
layouts/
  _default/
    baseof.html    shared layout: <head>, header, nav, footer, site.js
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
  posts/
    index.json     post metadata (date, kind, title, tags, url, etc.)
    README.md      full guide for adding posts
    *.md           post body content (no front-matter)
  assets/
    tokens.css     design tokens (colors, type, dark mode)
    index.css      page-specific styles for index
    writing.css    page-specific styles for writing
    post.css       page-specific styles for post
    about.css      page-specific styles for about
    contact.css    page-specific styles for contact
    projects.css   page-specific styles for projects
    stack.css      page-specific styles for stack
    bookmarks.css  page-specific styles for bookmarks
    404.css        page-specific styles for 404
    posts.js       markdown loader + renderer
    data.js        projects + stack data
    site.js        theme toggle

.github/
  workflows/
    deploy.yml     GitHub Actions: build Hugo → deploy to Pages
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

- **Header + nav + footer** — `layouts/_default/baseof.html` (one place, applies to all pages)
- **About page** — `content/about.html`
- **Contact page** — `content/contact.html`

---

## Deploy to GitHub Pages

The repo includes a GitHub Actions workflow that builds Hugo and deploys automatically on every push to `main`.

1. Create a new public repo on GitHub. Push this folder to it:

   ```bash
   git init
   git add .
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. The workflow runs automatically. Your site is live at:
   `https://YOUR-USERNAME.github.io/YOUR-REPO/`

If you want it at the root (`https://YOUR-USERNAME.github.io/`), name the repo `YOUR-USERNAME.github.io`.

### Custom domain (optional)

1. Add a `CNAME` file at the project root with one line: `yoursite.com`.
2. Configure DNS at your registrar:
   - **Apex domain (`yoursite.com`)**: A records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - **Subdomain (`www.yoursite.com`)**: CNAME → `YOUR-USERNAME.github.io`
3. In **Settings → Pages**, enter your domain and tick **Enforce HTTPS** once available.

---

## Customizing the design

- **Colors + dark mode** — `static/assets/tokens.css`. `:root` is light mode, `[data-theme="dark"]` is dark. Change `--accent` for a quick re-skin.
- **Fonts** — Inter (sans) + Source Serif (body) + JetBrains Mono, loaded from Google Fonts in `layouts/_default/baseof.html`.
- **Page-specific styles** — each page declares `extra_css: /assets/PAGENAME.css` in its front-matter; the layout picks it up automatically.

---

## Local preview

The site uses `fetch()` to load Markdown, so opening `index.html` directly via `file://` won't work. Use Hugo's built-in server:

```bash
hugo serve
# → http://localhost:1313
```

---

## Filling in the placeholders

Run a project-wide search for `[TODO` to find everything that needs replacing:

- `static/assets/data.js` — projects and stack
- `content/about.html`, `content/contact.html` — bio, location, socials
- `layouts/_default/baseof.html` — footer name, github/twitter/email links
- `static/posts/*.md` — sample posts (delete or replace)
- `hugo.toml` — site title

---

## License

MIT. Steal it. Rip it apart. Make your own.
