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
    name: "[TODO: project 3]",
    year: "2023",
    desc: "[TODO: weekend hack that got out of hand]",
    href: "#",
    tag: "archived",
  },
];

window.STACK = [
  { group: "Hardware", items: [
    { name: "[TODO: laptop]", note: "daily driver" },
    { name: "[TODO: monitor]", note: "" },
    { name: "[TODO: keyboard]", note: "" },
    { name: "[TODO: headphones]", note: "" },
    { name: "[TODO: phone]", note: "" },
  ]},
  { group: "Software", items: [
    { name: "VS Code", note: "main editor" },
    { name: "Ghostty", note: "terminal" },
    { name: "Arc", note: "browser" },
    { name: "Obsidian", note: "notes" },
    { name: "Figma", note: "design" },
    { name: "Raycast", note: "launcher" },
  ]},
  { group: "Services", items: [
    { name: "GitHub", note: "code + this site" },
    { name: "Cloudflare", note: "dns + tunnels" },
    { name: "1Password", note: "" },
    { name: "Fastmail", note: "email" },
    { name: "[TODO]", note: "" },
  ]},
];
