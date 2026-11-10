import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import Byte from "./characters/Byte";
import Bit from "./characters/Bit";
import StudioLights from "./StudioLights";
import Glow from "./Glow";
import { glowTexture, hot } from "./glowTexture";

const TILT = 0.22;
const RING_R = 1.95;

const Ring = () => {
  const spin = useRef();
  useFrame((_, dt) => {
    spin.current.rotation.y += dt * 0.25;
  });
  return (
    <group rotation-x={TILT} position-y={0.05}>
      <group ref={spin}>
        <mesh rotation-x={Math.PI / 2}>
          <torusGeometry args={[RING_R, 0.014, 16, 200]} />
          <meshBasicMaterial color={hot("#f2f0eb", 1.3)} toneMapped={false} transparent opacity={0.85} />
        </mesh>
        <mesh rotation-x={Math.PI / 2}>
          <torusGeometry args={[RING_R + 0.32, 0.006, 16, 200]} />
          <meshBasicMaterial color={hot("#ff6b2c", 1.6)} toneMapped={false} transparent opacity={0.8} />
        </mesh>
        {[0, 2.1, 4.2].map((a) => (
          <group key={a} rotation-y={a}>
            <mesh position-x={RING_R + 0.32}>
              <sphereGeometry args={[0.05, 16, 16]} />
              <meshBasicMaterial color={hot("#ff6b2c", 2.5)} toneMapped={false} />
            </mesh>
            <Glow color="#ff6b2c" scale={0.55} position-x={RING_R + 0.32} />
          </group>
        ))}
      </group>
    </group>
  );
};

// Bit rides the ring, always turned toward the camera.
const RingRider = () => {
  const orbit = useRef();
  const face = useRef();
  useFrame((_, dt) => {
    orbit.current.rotation.y += dt * 0.55;
    face.current.rotation.y = -orbit.current.rotation.y;
  });
  return (
    <group rotation-x={TILT} position-y={0.05}>
      <group ref={orbit} rotation-y={0.9}>
        <group position-x={RING_R} ref={face}>
          <Bit scale={0.55} />
        </group>
      </group>
    </group>
  );
};

const HoverPad = (props) => {
  const rings = useRef();
  useFrame(({ clock }) => {
    const s = 1 + (clock.elapsedTime % 2) * 0.35;
    rings.current.scale.setScalar(s);
    rings.current.children[0].material.opacity = 1 - (clock.elapsedTime % 2) / 2;
  });
  return (
    <group {...props}>
      <mesh rotation-x={-Math.PI / 2}>
        <planeGeometry args={[3.6, 3.6]} />
        <meshBasicMaterial
          map={glowTexture()}
          color="#3a5cff"
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>
      <group ref={rings}>
        <mesh rotation-x={-Math.PI / 2}>
          <ringGeometry args={[0.62, 0.66, 64]} />
          <meshBasicMaterial color={hot("#8be9ff", 1.6)} transparent toneMapped={false} depthWrite={false} />
        </mesh>
      </group>
    </group>
  );
};

const HeroCanvas = ({ frameloop, lite }) => (
  <Canvas
    frameloop={frameloop}
    dpr={lite ? [1, 1.5] : [1, 2]}
    camera={{ position: [0, 0.6, 12], fov: 30 }}
    gl={{ antialias: !lite, alpha: true, powerPreference: "high-performance" }}
  >
    <StudioLights />
    <group position-y={-0.55}>
      <Float speed={1.8} rotationIntensity={0.12} floatIntensity={0.7} floatingRange={[-0.12, 0.12]}>
        <Byte />
      </Float>
      <Ring />
      <RingRider />
      <HoverPad position-y={-1.75} />
    </group>
        <Sparkles count={lite ? 24 : 45} scale={[8, 6, 4]} size={2} speed={0.25} color="#f2f0eb" opacity={0.6} />
    <Sparkles count={lite ? 10 : 20} scale={[8, 6, 4]} size={2.6} speed={0.2} color="#ff9a6b" />
  </Canvas>
);

export default HeroCanvas;
