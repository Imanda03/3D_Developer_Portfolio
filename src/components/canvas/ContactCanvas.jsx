import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import Byte from "./characters/Byte";
import StudioLights from "./StudioLights";
import Glow from "./Glow";

const paperPlane = (() => {
  // Nose points along +z: two wings and a keel.
  const v = new Float32Array([
    0, 0, 0.5, -0.36, 0, -0.4, 0, 0, -0.3,
    0, 0, 0.5, 0, 0, -0.3, 0.36, 0, -0.4,
    0, 0, 0.5, 0, 0, -0.3, 0, -0.16, -0.36,
  ]);
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(v, 3));
  g.computeVertexNormals();
  return g;
})();

const PLANES = [
  { radius: 2.3, y: 0.9, speed: 0.6, phase: 0, color: "#ffffff" },
  { radius: 2.7, y: -0.3, speed: 0.45, phase: 2.2, color: "#e9fdff" },
  { radius: 2.0, y: 2.1, speed: 0.75, phase: 4.1, color: "#ffe4d6" },
];

const Planes = () => {
  const refs = useRef([]);
  useFrame(({ clock }) => {
    refs.current.forEach((g, i) => {
      const p = PLANES[i];
      g.rotation.y = p.phase + clock.elapsedTime * p.speed;
      g.position.y = p.y + Math.sin(clock.elapsedTime * 1.5 + p.phase) * 0.15;
    });
  });
  return PLANES.map((p, i) => (
    <group key={i} ref={(el) => (refs.current[i] = el)}>
      <mesh geometry={paperPlane} position-x={p.radius} rotation={[0, Math.PI, -0.35]} scale={0.55}>
        <meshStandardMaterial color={p.color} side={THREE.DoubleSide} flatShading roughness={0.5} />
      </mesh>
    </group>
  ));
};

const Planet = (props) => {
  const ref = useRef();
  useFrame((_, dt) => {
    ref.current.rotation.y += dt * 0.15;
  });
  return (
    <group {...props}>
      <Glow color="#ffffff" scale={4.5} opacity={0.25} />
      <mesh ref={ref}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhysicalMaterial
          color="#1a1f45"
          roughness={0.3}
          metalness={0.2}
          clearcoat={1}
          iridescence={1}
          iridescenceIOR={1.6}
          emissive="#000000"
          emissiveIntensity={0}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2.4, 0.2, 0]}>
        <torusGeometry args={[1.6, 0.06, 16, 120]} />
        <meshPhysicalMaterial color="#3a5cff" emissive="#3a5cff" emissiveIntensity={0.5} roughness={0.3} />
      </mesh>
    </group>
  );
};

const ContactCanvas = ({ frameloop, lite }) => (
  <Canvas
    frameloop={frameloop}
    dpr={lite ? [1, 1.5] : [1, 2]}
    camera={{ position: [0, 0.6, 9.5], fov: 34 }}
    gl={{ alpha: true, antialias: !lite }}
  >
    <StudioLights />
    <Planet position={[2.3, 2, -3.5]} />
    <group position={[-0.2, -0.75, 0]}>
      <Float speed={1.6} rotationIntensity={0.15} floatIntensity={0.7}>
        <Byte holding accent="#3a5cff" spark="#ffffff" rotation-y={0.3} scale={1.05} />
      </Float>
      <Planes />
    </group>
    <Sparkles count={lite ? 25 : 45} scale={[9, 6, 4]} size={2} speed={0.25} color="#f2f0eb" opacity={0.6} />
  </Canvas>
);

export default ContactCanvas;
