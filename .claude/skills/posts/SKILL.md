---
name: posts
description: Add or remove a post on Mehdi's portfolio site (the home feed). Use this whenever the user says things like "add a post", "new thought", "log this link", "drop a photo", "post this video", "remove the post about X", "delete that bookmark". Handles both creating and deleting feed entries.
---

# Posts skill

This site's home feed is driven by Markdown files in `static/posts/` plus a single index file at `static/posts/index.json`. There is **no front-matter** in the post files — all metadata lives in `index.json`.

## Adding a post

1. **Pick a filename**: `static/posts/YYYY-MM-DD-slug.md` where the date is today (or whatever the user says) and the slug is 2–5 lowercase words joined by hyphens. Confirm the slug with the user only if it's ambiguous.

2. **Write the body** as plain Markdown in that file. No front-matter. For `tweet` kind, the body *is* the whole post — keep it short. For `post` kind, write longer-form. For `link` / `video` / `buy` / `photo`, the body is optional commentary.

3. **Prepend a new entry** to the `posts` array in `static/posts/index.json` (newest entries go first — the array is in reverse-chronological order).

4. After editing, run `hugo --minify` from the project root to verify the build succeeds. Don't commit unless asked.

### Entry shape by kind

Required fields are marked **bold**. Optional fields can be omitted.

| `kind`    | What it is                  | Fields                                                                                  |
| --------- | --------------------------- | --------------------------------------------------------------------------------------- |
| `thought` | Short reflection            | **`file`**, **`date`**, **`kind`**, **`title`**, `tags`                                 |
| `post`    | Long essay (own page)       | **`file`**, **`date`**, **`kind`**, **`title`**, `tags`                                 |
| `tweet`   | One-liner, no title         | **`file`**, **`date`**, **`kind`**, `tags`                                              |
| `link`    | Article link                | **`file`**, **`date`**, **`kind`**, **`title`**, **`url`**, **`source`**, `image`, `tags` |
| `video`   | YouTube link                | **`file`**, **`date`**, **`kind`**, **`title`**, **`url`**, **`source: youtube.com`**, `tags` (thumbnail auto-derived from `url`) |
| `photo`   | Image post                  | **`file`**, **`date`**, **`kind`**, **`image`**, `title`, `tags`                        |
| `buy`     | Thing acquired              | **`file`**, **`date`**, **`kind`**, **`title`**, **`url`**, **`source`**, `tags`        |

`source` is a short host label like `youtube.com`, `nyt.com`, `arxiv.org`, `amazon.com` — not the full URL.

### Picking a kind

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

```jsonc
// New entry to prepend in static/posts/index.json
{
  "file": "2026-05-02-engineers-read-more.md",
  "date": "2026-05-02",
  "kind": "thought",
  "title": "Engineers read more than they write",
  "tags": ["engineering", "thinking"]
}
```

```markdown
<!-- static/posts/2026-05-02-engineers-read-more.md -->
The best engineers I know read more than they write — code, papers, postmortems. Output is downstream of input.
```

## Removing a post

1. **Find the entry**. Search `static/posts/index.json` for the user's description (title keywords, slug, kind, date). If multiple match, list them and ask which one.
2. **Delete the markdown file** under `static/posts/`.
3. **Remove the entry** from the `posts` array in `static/posts/index.json`.
4. Run `hugo --minify` to verify.

Never delete without confirming the match if the user's request is fuzzy ("delete that thing about football"). Echo back the title + date and ask before deleting.

## Conventions to preserve

- Keep `index.json` valid JSON — watch trailing commas after edits.
- Keep entries sorted newest-first by `date`. When inserting, place the new entry at the position matching its date.
- Use today's date by default. Don't invent future dates. Today's date is available in conversation context.
- Tags are lowercase, no spaces, dash-separated if multi-word (e.g. `["ai", "model-evals"]`).
- Slugs are lowercase, hyphenated, 2–5 words.
- Don't add fields the kind doesn't need. Extra noise hurts more than missing optional fields.

## Files involved

- `static/posts/index.json` — feed metadata, the source of truth for ordering and rendering
- `static/posts/<file>.md` — body content (no front-matter)
- `static/posts/README.md` — outdated; ignore the front-matter section there. The index.json is authoritative.
