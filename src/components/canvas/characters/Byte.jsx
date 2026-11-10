import { useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, useCursor } from "@react-three/drei";
import * as THREE from "three";
import Glow from "../Glow";
import { hot } from "../glowTexture";
import { pointerFrom } from "../pointer";

const { damp } = THREE.MathUtils;

// "Byte" — a hovering robot that tracks the cursor, blinks, and waves when clicked.
const Byte = ({
  eye = "#8be9ff",
  accent = "#3a5cff",
  spark = "#ff6b2c",
  holding = false,
  greet = true,
  ...props
}) => {
  const head = useRef();
  const torso = useRef();
  const eyes = useRef();
  const armR = useRef();
  const armL = useRef();
  const tip = useRef();
  const core = useRef();
  const flame = useRef();
  const state = useRef({ t: 0, waveUntil: greet ? 2.8 : 0, blinkAt: 1.6, blinkStart: -1 });
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  const m = useMemo(
    () => ({
      shell: new THREE.MeshPhysicalMaterial({
        color: "#eef0ff",
        roughness: 0.28,
        metalness: 0.05,
        clearcoat: 1,
        clearcoatRoughness: 0.12,
      }),
      visor: new THREE.MeshPhysicalMaterial({
        color: "#070917",
        roughness: 0.1,
        metalness: 0.5,
        clearcoat: 1,
        clearcoatRoughness: 0.04,
      }),
      joint: new THREE.MeshStandardMaterial({ color: "#232845", roughness: 0.35, metalness: 0.8 }),
      accent: new THREE.MeshPhysicalMaterial({
        color: accent,
        roughness: 0.25,
        metalness: 0.35,
        clearcoat: 1,
        emissive: accent,
        emissiveIntensity: 0.3,
      }),
      eye: new THREE.MeshBasicMaterial({ color: hot(eye, 2.4), toneMapped: false }),
      spark: new THREE.MeshBasicMaterial({ color: hot(spark, 2.4), toneMapped: false }),
      blush: new THREE.MeshBasicMaterial({ color: "#ff8a65", transparent: true, opacity: 0.45 }),
      flame: new THREE.MeshBasicMaterial({
        color: hot(eye, 1.8),
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
      }),
      paper: new THREE.MeshStandardMaterial({ color: "#fdfcff", roughness: 0.55 }),
    }),
    [eye, accent, spark]
  );

  useFrame((three, dt) => {
    const s = state.current;
    const t = (s.t = three.clock.elapsedTime);
    const p = pointerFrom(three.gl.domElement);

    head.current.rotation.y = damp(head.current.rotation.y, p.x * 0.55, 5, dt);
    head.current.rotation.x = damp(head.current.rotation.x, -p.y * 0.3, 5, dt);
    head.current.rotation.z = damp(head.current.rotation.z, -p.x * 0.08, 5, dt);
    torso.current.rotation.y = damp(torso.current.rotation.y, p.x * 0.22, 3, dt);
    eyes.current.position.x = damp(eyes.current.position.x, p.x * 0.07, 6, dt);
    eyes.current.position.y = damp(eyes.current.position.y, p.y * 0.05, 6, dt);

    if (t > s.blinkAt) {
      s.blinkStart = t;
      s.blinkAt = t + 2.2 + Math.random() * 3;
    }
    const k = (t - s.blinkStart) / 0.18;
    const blink = k >= 0 && k < 1 ? 0.12 + 0.88 * Math.abs(Math.cos(k * Math.PI)) : 1;
    const waving = t < s.waveUntil;
    eyes.current.scale.y = Math.min(blink, waving ? 0.55 : 1);

    const idle = Math.sin(t * 1.6) * 0.06;
    armR.current.rotation.z = damp(
      armR.current.rotation.z,
      waving ? 2.5 + Math.sin(t * 11) * 0.38 : 0.12 + idle,
      7,
      dt
    );
    if (holding) {
      armL.current.rotation.x = damp(armL.current.rotation.x, -1.15 + idle, 4, dt);
    } else {
      armL.current.rotation.z = damp(armL.current.rotation.z, -0.12 - idle, 7, dt);
    }

    tip.current.scale.setScalar(1 + Math.sin(t * 4) * 0.18);
    core.current.scale.setScalar(1 + Math.sin(t * 3) * 0.1);
    flame.current.scale.set(1, 0.85 + Math.sin(t * 30) * 0.06 + Math.random() * 0.1, 1);
  });

  const sayHi = (e) => {
    e.stopPropagation();
    state.current.waveUntil = state.current.t + 2.4;
  };

  return (
    <group
      {...props}
      onClick={sayHi}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={() => setHovered(false)}
    >
      {/* Torso + chest core */}
      <group ref={torso}>
        <RoundedBox args={[1.1, 0.95, 0.85]} radius={0.3} smoothness={6} material={m.shell} />
        <group position={[0, 0.02, 0.43]}>
          <mesh material={m.eye}>
            <torusGeometry args={[0.17, 0.03, 12, 48]} />
          </mesh>
          <mesh ref={core} material={m.spark}>
            <circleGeometry args={[0.095, 32]} />
          </mesh>
          <Glow color={spark} scale={0.9} opacity={0.6} position-z={0.05} />
        </group>
        <mesh position={[0, 0.55, 0]} material={m.joint}>
          <cylinderGeometry args={[0.16, 0.2, 0.2, 24]} />
        </mesh>
      </group>

      {/* Head */}
      <group ref={head} position={[0, 1.2, 0]}>
        <RoundedBox args={[1.55, 1.15, 1.15]} radius={0.34} smoothness={6} material={m.shell} />
        <RoundedBox args={[1.25, 0.78, 0.12]} radius={0.06} smoothness={4} position={[0, -0.02, 0.54]} material={m.visor} />
        <group ref={eyes} position={[0, 0.04, 0.62]}>
          <mesh position={[-0.27, 0, 0]} material={m.eye}>
            <capsuleGeometry args={[0.085, 0.12, 8, 16]} />
          </mesh>
          <mesh position={[0.27, 0, 0]} material={m.eye}>
            <capsuleGeometry args={[0.085, 0.12, 8, 16]} />
          </mesh>
          <Glow color={eye} scale={1.2} opacity={0.14} />
        </group>
        <mesh position={[0, -0.2, 0.615]} rotation-z={Math.PI} material={m.eye}>
          <torusGeometry args={[0.08, 0.018, 8, 24, Math.PI]} />
        </mesh>
        <mesh position={[-0.42, -0.14, 0.606]} material={m.blush}>
          <circleGeometry args={[0.07, 24]} />
        </mesh>
        <mesh position={[0.42, -0.14, 0.606]} material={m.blush}>
          <circleGeometry args={[0.07, 24]} />
        </mesh>
        {[-1, 1].map((side) => (
          <group key={side} position={[side * 0.8, 0, 0]}>
            <mesh rotation-z={Math.PI / 2} material={m.accent}>
              <cylinderGeometry args={[0.2, 0.2, 0.16, 32]} />
            </mesh>
            <mesh position-x={side * 0.085} rotation-y={Math.PI / 2} material={m.eye}>
              <torusGeometry args={[0.12, 0.022, 8, 32]} />
            </mesh>
          </group>
        ))}
        <mesh position={[0, 0.76, 0]} material={m.joint}>
          <cylinderGeometry args={[0.025, 0.025, 0.4, 8]} />
        </mesh>
        <group ref={tip} position={[0, 0.98, 0]}>
          <mesh material={m.spark}>
            <sphereGeometry args={[0.085, 24, 24]} />
          </mesh>
          <Glow color={spark} scale={0.9} />
        </group>
      </group>

      {/* Arms (pivot at the shoulder) */}
      <group ref={armR} position={[0.66, 0.28, 0]}>
        <mesh material={m.joint}>
          <sphereGeometry args={[0.14, 20, 20]} />
        </mesh>
        <mesh position={[0, -0.32, 0]} material={m.shell}>
          <capsuleGeometry args={[0.12, 0.38, 8, 16]} />
        </mesh>
        <mesh position={[0, -0.64, 0]} material={m.accent}>
          <sphereGeometry args={[0.16, 24, 24]} />
        </mesh>
      </group>
      <group ref={armL} position={[-0.66, 0.28, 0]} rotation-z={holding ? -0.25 : 0}>
        <mesh material={m.joint}>
          <sphereGeometry args={[0.14, 20, 20]} />
        </mesh>
        <mesh position={[0, -0.32, 0]} material={m.shell}>
          <capsuleGeometry args={[0.12, 0.38, 8, 16]} />
        </mesh>
        <mesh position={[0, -0.64, 0]} material={m.accent}>
          <sphereGeometry args={[0.16, 24, 24]} />
        </mesh>
        {holding && (
          <group position={[0.1, -0.82, 0.05]} rotation={[1.15, 0, 0.25]}>
            <mesh material={m.paper}>
              <boxGeometry args={[0.66, 0.44, 0.04]} />
            </mesh>
            <mesh position={[-0.15, 0.08, 0.025]} rotation-z={-0.55} material={m.accent}>
              <boxGeometry args={[0.4, 0.025, 0.01]} />
            </mesh>
            <mesh position={[0.15, 0.08, 0.025]} rotation-z={0.55} material={m.accent}>
              <boxGeometry args={[0.4, 0.025, 0.01]} />
            </mesh>
            <mesh position={[0, -0.02, 0.03]} material={m.spark}>
              <circleGeometry args={[0.055, 24]} />
            </mesh>
          </group>
        )}
      </group>

      {/* Hover thruster */}
      <mesh position={[0, -0.58, 0]} material={m.joint}>
        <cylinderGeometry args={[0.3, 0.2, 0.22, 32]} />
      </mesh>
      <mesh ref={flame} position={[0, -0.98, 0]} rotation-x={Math.PI} material={m.flame}>
        <coneGeometry args={[0.17, 0.6, 24, 1, true]} />
      </mesh>
      <Glow color={eye} scale={1.6} opacity={0.7} position-y={-0.85} />
    </group>
  );
};

export default Byte;
