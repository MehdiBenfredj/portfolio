# Posts

Drop Markdown files here. They show up on the home feed automatically.

## How posts work

Each post is **two things**:

1. A Markdown file in this folder — `YYYY-MM-DD-slug.md`. Body only, **no front-matter**.
2. An entry in `index.json` (this same folder). All metadata (date, kind, title, tags, url, etc.) lives there. The feed is rendered from `index.json`, not from scanning files.

Entries in `index.json` are kept newest-first.

## Adding a post

1. Create `YYYY-MM-DD-slug.md` in this folder. Write plain Markdown.

   ```markdown
   Body in markdown. Headings, **bold**, _italic_, [links](https://example.com),
   lists, code blocks — all work.
   ```

2. Prepend an entry at the top of the `posts` array in `index.json`:

   ```json
   {
     "file": "2026-05-02-my-post.md",
     "date": "2026-05-02",
     "kind": "thought",
     "title": "My title here",
     "tags": ["ai", "thinking"]
   }
   ```

3. Commit + push. GitHub Pages re-deploys in ~30 seconds.

## Field reference

- **`file`** *(required)* — filename of the markdown file in this folder.
- **`date`** *(required)* — `YYYY-MM-DD`. Used for sorting and display.
- **`kind`** *(required)* — what flavor of post:
  - `thought` — a short reflection. Needs `title`.
  - `post` — a longer essay, renders on its own page. Needs `title`.
  - `tweet` — a one-liner with no title (the body is the whole thing).
  - `link` — a link to an article. Needs `url` and `source`.
  - `video` — a YouTube link. Needs `url` and `source: "youtube.com"`. Thumbnail auto-derived.
  - `photo` — an image post. Needs `image`.
  - `buy` — a thing you got. Needs `url` and `source`.
- **`title`** — required for everything except `tweet`.
- **`tags`** — array of lowercase strings, e.g. `["ai", "football"]`.
- **`url`** — for `link`, `video`, `buy`.
- **`source`** — short host label like `youtube.com`, `arxiv.org`, `nyt.com`.
- **`image`** — required for `photo`; optional thumbnail for `link`.

## Removing a post

1. Delete the `.md` file from this folder.
2. Remove its entry from the `posts` array in `index.json`.
3. Commit + push.

## Tip: use the `/posts` skill

If you're working with the Claude Code agent in this repo, just say "add a post about X" or "remove the post about Y" — the `posts` skill at `.claude/skills/posts/SKILL.md` handles the file creation, the JSON edit, and the build check.
