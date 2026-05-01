// Markdown post loader.
// Fetches posts/index.json for metadata, then each .md file for body content.
// Exposes window.loadPosts() returning a sorted array of post objects.

(function () {
  // Tiny markdown -> HTML. Covers the basics: headings, bold/italic, links,
  // inline code, code blocks, lists, paragraphs, horizontal rules, blockquotes.
  function md2html(src) {
    const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    // protect code blocks first
    const codeBlocks = [];
    src = src.replace(/```([\w-]*)\n([\s\S]*?)```/g, (_, lang, code) => {
      codeBlocks.push(`<pre><code class="lang-${lang}">${escape(code)}</code></pre>`);
      return `\u0000${codeBlocks.length - 1}\u0000`;
    });

    // split into blocks by blank lines
    const blocks = src.split(/\n{2,}/).map(b => b.trim()).filter(Boolean);
    const html = blocks.map(block => {
      // restore code block placeholders
      if (/^\u0000\d+\u0000$/.test(block)) {
        return codeBlocks[parseInt(block.slice(1, -1), 10)];
      }
      // heading
      const h = block.match(/^(#{1,6})\s+(.*)$/);
      if (h) {
        const level = h[1].length;
        return `<h${level}>${inline(h[2])}</h${level}>`;
      }
      // hr
      if (/^---+$/.test(block)) return '<hr>';
      // blockquote
      if (block.startsWith('>')) {
        const inner = block.split('\n').map(l => l.replace(/^>\s?/, '')).join(' ');
        return `<blockquote>${inline(inner)}</blockquote>`;
      }
      // unordered list
      if (block.split('\n').every(l => /^[-*]\s+/.test(l))) {
        const items = block.split('\n').map(l => `<li>${inline(l.replace(/^[-*]\s+/, ''))}</li>`).join('');
        return `<ul>${items}</ul>`;
      }
      // ordered list
      if (block.split('\n').every(l => /^\d+\.\s+/.test(l))) {
        const items = block.split('\n').map(l => `<li>${inline(l.replace(/^\d+\.\s+/, ''))}</li>`).join('');
        return `<ol>${items}</ol>`;
      }
      // paragraph
      return `<p>${inline(block.replace(/\n/g, ' '))}</p>`;
    }).join('\n');
    return html;
  }

  function inline(s) {
    // Order matters
    return s
      // inline code
      .replace(/`([^`]+)`/g, (_, c) => `<code>${c.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}</code>`)
      // images ![alt](url)
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" loading="lazy">')
      // links [text](url)
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
      // bold
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      // italic _x_ or *x*
      .replace(/(^|[\s(])\*([^*\n]+)\*/g, '$1<em>$2</em>')
      .replace(/(^|[\s(])_([^_\n]+)_/g, '$1<em>$2</em>');
  }

  async function loadPosts() {
    if (window.__POSTS_CACHE) return window.__POSTS_CACHE;
    try {
      const stored = sessionStorage.getItem('__posts');
      if (stored) {
        window.__POSTS_CACHE = JSON.parse(stored);
        return window.__POSTS_CACHE;
      }
    } catch (_) {}
    const idx = await fetch('/posts/index.json').then(r => r.json());
    const entries = idx.posts || [];
    const items = await Promise.all(entries.map(async (entry) => {
      const text = await fetch('/posts/' + entry.file).then(r => r.text());
      const body = text.trim();
      return {
        file: entry.file,
        slug: entry.file.replace(/\.md$/, ''),
        kind: entry.kind || 'thought',
        date: entry.date || '',
        title: entry.title || '',
        tags: Array.isArray(entry.tags) ? entry.tags : [],
        url: entry.url || '',
        source: entry.source || '',
        image: entry.image || '',
        body,
        html: md2html(body),
      };
    }));
    items.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
    window.__POSTS_CACHE = items;
    try { sessionStorage.setItem('__posts', JSON.stringify(items)); } catch (_) {}
    return items;
  }

  window.loadPosts = loadPosts;
})();
