import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import Bit from "./characters/Bit";
import StudioLights from "./StudioLights";
import Glow from "./Glow";
import { hot } from "./glowTexture";

const BUTTONS = [
  [0, 0.22, "#ff6b2c"],
  [0.22, 0, "#f2f0eb"],
  [0, -0.22, "#8be9ff"],
  [-0.22, 0, "#ff9a6b"],
];

const Gamepad = () => {
  const body = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#161b3d",
        roughness: 0.3,
        metalness: 0.4,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
      }),
    []
  );
  const dpad = useMemo(() => new THREE.MeshBasicMaterial({ color: hot("#ff6b2c", 1.8), toneMapped: false }), []);
  return (
    <group>
      <RoundedBox args={[3.4, 1.35, 0.55]} radius={0.3} smoothness={6} material={body} />
      {[-1, 1].map((side) => (
        <mesh key={side} position={[side * 1.25, -0.55, 0]} rotation-z={side * -0.5} material={body}>
          <capsuleGeometry args={[0.42, 0.5, 8, 24]} />
        </mesh>
      ))}
      <group position={[-1.05, 0.08, 0.3]}>
        <RoundedBox args={[0.62, 0.2, 0.08]} radius={0.04} material={dpad} />
        <RoundedBox args={[0.2, 0.62, 0.08]} radius={0.04} material={dpad} />
      </group>
      <group position={[1.05, 0.08, 0.3]}>
        {BUTTONS.map(([x, y, color]) => (
          <mesh key={color} position={[x, y, 0]} rotation-x={Math.PI / 2}>
            <cylinderGeometry args={[0.1, 0.1, 0.08, 24]} />
            <meshBasicMaterial color={hot(color, 1.8)} toneMapped={false} />
          </mesh>
        ))}
      </group>
      {[-0.22, 0.22].map((x) => (
        <RoundedBox key={x} args={[0.26, 0.08, 0.05]} radius={0.02} position={[x, 0.28, 0.29]}>
          <meshStandardMaterial color="#4a5290" />
        </RoundedBox>
      ))}
      <mesh position={[0, -0.32, 0.29]}>
        <boxGeometry args={[0.7, 0.03, 0.02]} />
        <meshBasicMaterial color={hot("#8be9ff", 2)} toneMapped={false} />
      </mesh>
    </group>
  );
};

const BRICK_COLORS = ["#8be9ff", "#b8f6fb", "#f2f0eb", "#ffc3a6", "#ff8a5c", "#ff6b2c"];

const Bricks = () => {
  const group = useRef();
  useFrame(({ clock }) => {
    group.current.children.forEach((brick, i) => {
      brick.position.y = brick.userData.y + Math.sin(clock.elapsedTime * 2 + i * 0.6) * 0.05;
    });
  });
  return (
    <group ref={group} position={[0, 2.05, -0.4]}>
      {[0, 1].flatMap((row) =>
        BRICK_COLORS.map((color, col) => (
          <RoundedBox
            key={`${row}-${col}`}
            args={[0.5, 0.22, 0.22]}
            radius={0.05}
            position={[(col - 2.5) * 0.58, row * 0.3, 0]}
            userData={{ y: row * 0.3 }}
          >
            <meshPhysicalMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.35}
              roughness={0.25}
              clearcoat={1}
            />
          </RoundedBox>
        ))
      )}
    </group>
  );
};

const Ball = () => {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    ref.current.position.set(Math.sin(t * 1.3) * 1.4, 1.2 + Math.abs(Math.sin(t * 2.2)) * 0.7, 0.2);
  });
  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[0.09, 20, 20]} />
        <meshBasicMaterial color={hot("#ffffff", 2.5)} toneMapped={false} />
      </mesh>
      <Glow color="#ffffff" scale={0.8} />
    </group>
  );
};

const SEGMENTS = 14;

// A neon snake circling the scene — a nod to Neo Snake.
const Snake = () => {
  const group = useRef();
  const colors = useMemo(
    () =>
      Array.from({ length: SEGMENTS }, (_, i) =>
        hot("#ff6b2c", 1.8).lerp(hot("#8be9ff", 1.8), i / (SEGMENTS - 1))
      ),
    []
  );
  useFrame(({ clock }) => {
    const t = clock.elapsedTime * 0.7;
    group.current.children.forEach((seg, i) => {
      const s = t - i * 0.11;
      seg.position.set(Math.cos(s) * 3, -1.55 + Math.sin(s * 3) * 0.18, Math.sin(s) * 1.5);
    });
  });
  return (
    <group ref={group}>
      {colors.map((color, i) => (
        <mesh key={i} scale={1 - i * 0.045}>
          <sphereGeometry args={[0.16, 20, 20]} />
          <meshBasicMaterial color={color} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
};

const ArcadeCanvas = ({ frameloop, lite }) => (
  <Canvas
    frameloop={frameloop}
    dpr={lite ? [1, 1.5] : [1, 2]}
    camera={{ position: [0, 0.5, 9.5], fov: 38 }}
    gl={{ alpha: true, antialias: !lite }}
  >
    <StudioLights />
    <group position-y={-0.35}>
      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.6}>
        <group rotation={[0.35, -0.3, 0.04]}>
          <Gamepad />
          <Bit position={[0.05, 0.68, 0]} scale={0.75} />
          <Bit position={[-1.25, 0.68, -0.05]} scale={0.42} color="#f2f0eb" sprout="#ff6b2c" speed={4} offset={1.3} />
        </group>
      </Float>
      <Bricks />
      <Ball />
      <Snake />
    </group>
    <Sparkles count={lite ? 25 : 50} scale={[9, 6, 4]} size={2} speed={0.3} color="#f2f0eb" opacity={0.6} />
  </Canvas>
);

export default ArcadeCanvas;
