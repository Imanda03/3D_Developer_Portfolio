import * as THREE from "three";

let texture;

// Soft radial falloff used for additive halos (cheaper than a bloom pass, works on transparent canvases).
export const glowTexture = () => {
  if (texture) return texture;
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.22, "rgba(255,255,255,0.55)");
  gradient.addColorStop(0.55, "rgba(255,255,255,0.12)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  texture = new THREE.CanvasTexture(canvas);
  return texture;
};

// Colour pushed past 1.0 so un-tonemapped materials read as light sources.
export const hot = (hex, k = 2) => new THREE.Color(hex).multiplyScalar(k);
