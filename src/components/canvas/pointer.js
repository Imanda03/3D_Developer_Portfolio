// Window-level pointer so characters keep tracking the cursor when it leaves their canvas.
const raw = {
  x: typeof window === "undefined" ? 0 : window.innerWidth / 2,
  y: typeof window === "undefined" ? 0 : window.innerHeight / 2,
};

if (typeof window !== "undefined") {
  window.addEventListener(
    "pointermove",
    (e) => {
      raw.x = e.clientX;
      raw.y = e.clientY;
    },
    { passive: true }
  );
}

const out = { x: 0, y: 0 };
const clamp = (v) => Math.max(-1.5, Math.min(1.5, v));

// Pointer relative to the element's centre, where ±1 is its edge.
export const pointerFrom = (el) => {
  const rect = el.getBoundingClientRect();
  out.x = clamp(((raw.x - rect.left) / rect.width) * 2 - 1);
  out.y = clamp(-(((raw.y - rect.top) / rect.height) * 2 - 1));
  return out;
};
