# Legacy portfolio (v1)

A frozen snapshot of the previous portfolio (commit `c04f5c8`), kept for reference.
It is **not** built, linted or deployed — nothing in `src/` imports from here.

To run it, use the `legacy-portfolio` branch, which points at the same commit:

```bash
git worktree add ../portfolio-v1 legacy-portfolio
cd ../portfolio-v1 && npm install --legacy-peer-deps && npm run dev
```
