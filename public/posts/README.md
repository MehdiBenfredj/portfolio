# Posts

Drop Markdown files here. They show up on the home feed automatically.

## How to add a post

1. Create a new `.md` file in this folder. Filename convention: `YYYY-MM-DD-slug.md`.
2. Add its filename to `index.json` (most recent first works, but actual ordering uses the `date:` in front-matter).
3. Commit + push. GitHub Pages re-deploys in ~30 seconds.

## File format

Each file has YAML-ish front-matter at the top, then Markdown body:

```markdown
---
date: 2026-04-29
kind: thought
tags: [ai, thinking]
title: My title here
---

Body in markdown. Headings, **bold**, _italic_, [links](https://example.com), lists, all work.
```

## Field reference

- **`date`** *(required)* — `YYYY-MM-DD`. Used for sorting and display.
- **`kind`** *(required)* — what flavor of post:
  - `thought` — a short reflection. Title + body.
  - `post` — a longer essay. Renders with full markdown formatting on its own page.
  - `tweet` — a one-liner with no title (the body is the whole thing).
  - `link` — a link to an article. Add `url:` and `source:`.
  - `video` — a YouTube link. Thumbnail auto-generated from `url:`.
  - `photo` — an image post. Add `image:`.
  - `buy` — a thing you got. Add `url:` and `source:` (e.g. `amazon.com`).
- **`title`** — required for everything except `tweet`.
- **`tags`** — array of strings, e.g. `[ai, football]`.
- **`url`** — for `link`, `video`, `buy`.
- **`source`** — short label like `youtube.com`, `arxiv.org`, `nyt.com`.
- **`image`** — for `photo`, or to give any `link` a preview thumbnail.

## Auto-regenerate index.json (optional)

If you don't want to hand-edit `index.json`, run this from the project root before committing — it regenerates the index from whatever `.md` files are in `posts/`:

```bash
ls posts/*.md | xargs -n1 basename | jq -R -s -c 'split("\n") | map(select(. != "")) | {posts: .}' > posts/index.json
```

Or in Node:

```bash
node -e "const fs=require('fs');fs.writeFileSync('posts/index.json',JSON.stringify({posts:fs.readdirSync('posts').filter(f=>f.endsWith('.md')).sort().reverse()},null,2))"
```

That's it.
