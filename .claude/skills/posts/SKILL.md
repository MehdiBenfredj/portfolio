---
name: posts
description: Add or remove a post on Mehdi's portfolio site (the home feed). Use this whenever the user says things like "add a post", "new thought", "log this link", "drop a photo", "post this video", "remove the post about X", "delete that bookmark". Handles both creating and deleting feed entries.
---

# Posts skill

This site's home feed is rendered by Hugo from Markdown files in `content/posts/`. Each post is a single file with **YAML front-matter** holding the metadata, followed by the Markdown body. There is no separate index file — Hugo discovers posts by scanning the directory.

## Adding a post

1. **Pick a filename**: `content/posts/YYYY-MM-DD-slug.md` where the date is today (or whatever the user says) and the slug is 2–5 lowercase words joined by hyphens. The slug becomes the URL: `/posts/<slug>/`. Confirm the slug with the user only if it's ambiguous.

2. **Write the file** with front-matter + body. For `tweet`, the body *is* the whole post — keep it short. For `post`, write longer-form. For `link` / `video` / `buy` / `photo`, the body is optional commentary. **No HTML in the body** — just plain Markdown.

3. After editing, run `hugo --minify` from the project root to verify the build succeeds. Don't commit unless asked.

### Front-matter shape by feed

Required fields are marked **bold**. Optional fields can be omitted.

| `feed`    | What it is                  | Fields                                                                                                       |
| --------- | --------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `thought` | Short reflection            | **`date`**, **`feed`**, **`title`**, `tags`                                                                  |
| `post`    | Long essay (own page)       | **`date`**, **`feed`**, **`title`**, `tags`                                                                  |
| `tweet`   | One-liner, no title         | **`date`**, **`feed`**, `tags`                                                                               |
| `link`    | Article link                | **`date`**, **`feed`**, **`title`**, **`url`**, **`source`**, `image`, `tags`                                |
| `video`   | YouTube link                | **`date`**, **`feed`**, **`title`**, **`url`**, **`source: youtube.com`**, `tags` (thumbnail auto-derived from `url`) |
| `photo`   | Image post                  | **`date`**, **`feed`**, **`image`**, `title`, `tags`                                                         |
| `buy`     | Thing acquired              | **`date`**, **`feed`**, **`title`**, **`url`**, **`source`**, `tags`                                         |

`source` is a short host label like `youtube.com`, `nyt.com`, `arxiv.org`, `amazon.com` — not the full URL.

### Picking a feed

Infer from what the user pastes/says:

- A YouTube URL → `video`
- A non-YouTube URL with their own commentary → `link`
- A short observation, no URL → `thought`
- A one-liner that doesn't need a title → `tweet`
- An image URL or "photo of …" → `photo`
- "I bought X" / Amazon-style URL → `buy`
- Multi-paragraph piece they wrote → `post`

If genuinely ambiguous, ask one quick clarifying question.

### Example: adding a thought

User: *"Add a post: I keep noticing that the best engineers I know read more than they write."*

Create `content/posts/2026-05-02-engineers-read-more.md`:

```markdown
---
date: 2026-05-02
feed: thought
title: "Engineers read more than they write"
tags: [engineering, thinking]
---

The best engineers I know read more than they write — code, papers, postmortems. Output is downstream of input.
```

### Example: adding a link

```markdown
---
date: 2026-05-02
feed: link
title: "On the dangers of stochastic parrots"
url: "https://dl.acm.org/doi/10.1145/3442188.3445922"
source: "dl.acm.org"
tags: [ai, ethics]
---

Worth re-reading. The framing aged better than I expected.
```

## Removing a post

1. **Find the file**. Search `content/posts/` for the user's description (filename slug, title in front-matter, or body keyword). If multiple match, list them and ask which one.
2. **Delete the file** under `content/posts/`.
3. Run `hugo --minify` to verify the build still passes.

Never delete without confirming the match if the user's request is fuzzy ("delete that thing about football"). Echo back the title + date and ask before deleting.

## Conventions to preserve

- Keep front-matter valid YAML. Quote titles that contain colons or other special chars.
- Use today's date by default. Don't invent future dates. Today's date is available in conversation context.
- Tags are lowercase, no spaces, dash-separated if multi-word (e.g. `[ai, model-evals]`).
- Slugs are lowercase, hyphenated, 2–5 words. Filename date prefix must match the `date:` field.
- Don't add fields the feed doesn't need. Extra noise hurts more than missing optional fields.

## Files involved

- `content/posts/<YYYY-MM-DD-slug>.md` — one file per post, with YAML front-matter + Markdown body
- `layouts/posts/single.html` — single-post page template (don't edit unless changing layout)
- `layouts/partials/feed/<feed>.html` — per-feed feed card templates (don't edit unless changing layout)
