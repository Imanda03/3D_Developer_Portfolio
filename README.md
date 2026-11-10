# anish-sharma.com.np

Personal portfolio of **Anish Sharma** — full-stack engineer (React, React Native, Node) based in Nepal.

Built with React 19, Vite, Tailwind CSS, Framer Motion and React Three Fiber. Every 3D character on the page
(Byte the robot and Bit the cube) is modelled in code from primitives — no downloaded models.

## Develop

```bash
npm install --legacy-peer-deps
npm run dev       # http://localhost:5173
npm run lint
npm run build && npm run preview
```

Requires Node 22+. The contact form uses EmailJS; keys are read from `.env` (`VITE_APP_EMAILJS_*`).

## Where things live

| Path | What |
| --- | --- |
| `src/constants/index.js` | All content: experience, projects, games, socials, testimonials |
| `src/constants/tech.js` | Skills and their [simple-icons](https://simpleicons.org) glyphs |
| `src/components/` | Page sections (`Hero`, `Works`, `About`, …) |
| `src/components/canvas/` | 3D scenes, lazy-loaded and paused when off-screen |
| `src/components/canvas/characters/` | `Byte` and `Bit` |
| `src/assets/shots/` | Project and game screenshots (WebP) |
| `legacy/` | Frozen copy of the previous portfolio — not built or deployed |

To show testimonials, add real quotes to `testimonials` in `src/constants/index.js`; the section appears
automatically.

Deployed on Netlify (`netlify.toml`).
