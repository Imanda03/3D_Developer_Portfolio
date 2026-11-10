import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, OrbitControls, useCursor } from "@react-three/drei";
import * as THREE from "three";
import { TECH } from "../../constants/tech";
import Glow from "./Glow";
import { hot } from "./glowTexture";

const W = 256;
const H = 320;

const drawBadge = (name, icon) => {
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.arc(128, 124, 110, 0, Math.PI * 2);
  const fill = ctx.createRadialGradient(128, 80, 10, 128, 124, 120);
  fill.addColorStop(0, "#222a66");
  fill.addColorStop(1, "#0e1230");
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = "rgba(255,255,255,0.35)";
  ctx.stroke();

  ctx.save();
  ctx.translate(128 - 56, 124 - 56);
  ctx.scale(112 / 24, 112 / 24);
  ctx.fillStyle = "#f2f0eb";
  ctx.fill(new Path2D(icon.path));
  ctx.restore();

  ctx.font = "500 30px Geist, system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.fillStyle = "#dbe2ff";
  ctx.fillText(name, 128, 300);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
};

// Badges are drawn after webfonts load so labels use Inter, not a fallback.
const useBadges = () => {
  const [badges, setBadges] = useState([]);
  useEffect(() => {
    let alive = true;
    let made = [];
    document.fonts.ready.then(() => {
      if (!alive) return;
      made = Object.entries(TECH)
        .filter(([, icon]) => icon)
        .map(([name, icon]) => ({ name, texture: drawBadge(name, icon) }));
      setBadges(made);
    });
    return () => {
      alive = false;
      made.forEach((b) => b.texture.dispose());
    };
  }, []);
  return badges;
};

const fibonacciSphere = (n, r) =>
  Array.from({ length: n }, (_, i) => {
    const y = 1 - (i / (n - 1)) * 2;
    const ring = Math.sqrt(1 - y * y);
    const theta = i * Math.PI * (3 - Math.sqrt(5));
    return [Math.cos(theta) * ring * r, y * r, Math.sin(theta) * ring * r];
  });

const Badge = ({ texture, position }) => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  useFrame((_, dt) => {
    const s = THREE.MathUtils.damp(ref.current.scale.x, hovered ? 1.35 : 1, 8, dt);
    ref.current.scale.setScalar(s);
  });
  return (
    <Billboard position={position}>
      <mesh
        ref={ref}
        onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
        onPointerOut={() => setHovered(false)}
      >
        <planeGeometry args={[0.9, 0.9 * (H / W)]} />
        <meshBasicMaterial map={texture} transparent depthWrite={false} toneMapped={false} />
      </mesh>
    </Billboard>
  );
};

const Cloud = () => {
  const badges = useBadges();
  const group = useRef();
  const positions = useMemo(() => fibonacciSphere(Math.max(badges.length, 2), 2.7), [badges.length]);
  useFrame((_, dt) => {
    group.current.rotation.y += dt * 0.12;
  });
  return (
    <group ref={group}>
      {badges.map((b, i) => (
        <Badge key={b.name} texture={b.texture} position={positions[i]} />
      ))}
    </group>
  );
};

const Core = () => {
  const ref = useRef();
  useFrame((_, dt) => {
    ref.current.rotation.x += dt * 0.2;
    ref.current.rotation.y += dt * 0.3;
  });
  return (
    <group>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshBasicMaterial color={hot("#f2f0eb", 1.2)} wireframe toneMapped={false} transparent opacity={0.18} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.6, 48, 48]} />
        <meshPhysicalMaterial
          color="#ff6b2c"
          roughness={0.15}
          metalness={0.2}
          clearcoat={1}
          iridescence={1}
          emissive="#ff6b2c"
          emissiveIntensity={0.7}
        />
      </mesh>
      <Glow color="#ff6b2c" scale={4} opacity={0.45} />
    </group>
  );
};

const TechCloudCanvas = ({ frameloop, interactive }) => (
  <Canvas frameloop={frameloop} dpr={[1, 2]} camera={{ position: [0, 0, 10.5], fov: 42 }} gl={{ alpha: true }}>
    <ambientLight intensity={0.6} />
    <pointLight position={[3, 3, 4]} intensity={40} color="#ffffff" />
    <pointLight position={[-3, -2, 4]} intensity={30} color="#ff6b2c" />
    <Core />
    <Cloud />
    {interactive && <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} />}
  </Canvas>
);

export default TechCloudCanvas;
