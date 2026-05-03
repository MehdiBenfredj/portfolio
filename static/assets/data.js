// Site-wide data: just projects + stack. Posts/stream live in posts/*.md.

window.PROJECTS = [
  {
    name: "Tailor",
    year: "2026",
    desc: "Paste a LinkedIn job URL — title and employer fill automatically, then your resume is scored and tailored.",
    href: "https://tailor.mehdibenfredj.com",
    tag: "active",
  },
  {
    name: "DiskVu",
    year: "2026",
    desc: "A fast, interactive TUI disk analyzer for the terminal — inspired by DaisyDisk, built for the command line. Works on macOS, Linux, and headless EC2/SSH sessions.",
    href: "https://github.com/MehdiBenfredj/DiskVu",
    tag: "shipped",
  },
  {
    name: "Enroln Email",
    year: "2025",
    desc: "Fast, parallel email analyzer in Golang, using goroutines. 517k emails analyzed in under 40 seconds",
    href: "https://github.com/MehdiBenfredj/enron_email",
    tag: "archived",
  },
  {
    name: "Transferase",
    year: "2024",
    desc: "Move your playlists between different streaming services. Killed because of google APIs limits 😭",
    href: "https://github.com/MehdiBenfredj/transferase_backend",
    tag: "archived",
  },
];

window.STACK = [
  {
    group: "Hardware",
    items: [
      { name: "MacBook Pro ", note: "daily driver" },
      { name: "DELL monitor", note: "old as hell 🔥" },
      { name: "Logitech G915 TKL", note: "⌨️" },
      { name: "Logitech G502 hero", note: "⌨🖱️" },
      { name: "Beats Studio 3 🎧", note: "" },
      { name: "LG Evo OLED C5 65 📺", note: "Best in the game" },
    ],
  },
  {
    group: "Software",
    items: [
      { name: "VS Code", note: "main editor" },
      { name: "iTerm2", note: "terminal" },
      { name: "Zen", note: "main browser 🌐" },
      { name: "Raycast", note: "launcher" },
      { name: "Obsidian", note: "notes 📝 & knowledge base" },
      { name: "OpenClaw 🦞", note: "my buddies 🤖 live there" },
      { name: "Canva", note: "design" },
      { name: "GitHub Mobile", note: "checking on code 👨‍💻" },
      { name: "IONOS", note: "domains 🌐" },
      { name: "Proton VPN", note: "VPN 🛜" },
      { name: "Proton pass", note: "pwd manager 🔐" },
      { name: "uBlock Origin", note: "🚫" },
      { name: "SponsoBlock", note: "🙅" },
      { name: "Todoist", note: "todos ✅" },
      { name: "Substack 📝", note: "hidden gems 💎" },
      { name: "Reddit", note: "love hanging out there" },
    ],
  },
];
