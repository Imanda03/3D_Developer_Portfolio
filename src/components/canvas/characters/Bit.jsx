import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import Glow from "../Glow";
import { hot } from "../glowTexture";

// "Bit" — Byte's bouncy cube sidekick. Squashes on landing, blinks, never stops hopping.
const Bit = ({ color = "#ff6b2c", sprout = "#8be9ff", speed = 3.2, offset = 0, ...props }) => {
  const body = useRef();
  const eyes = useRef();
  const blink = useRef({ at: 1 + offset, start: -1 });

  const m = useMemo(
    () => ({
      shell: new THREE.MeshPhysicalMaterial({
        color,
        roughness: 0.3,
        metalness: 0.1,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
        emissive: color,
        emissiveIntensity: 0.12,
      }),
      face: new THREE.MeshStandardMaterial({ color: "#0b0d1c", roughness: 0.4 }),
      shine: new THREE.MeshBasicMaterial({ color: "#ffffff" }),
      blush: new THREE.MeshBasicMaterial({ color: "#ffd0b8", transparent: true, opacity: 0.6 }),
      sprout: new THREE.MeshBasicMaterial({ color: hot(sprout, 2.2), toneMapped: false }),
    }),
    [color, sprout]
  );

  useFrame((three) => {
    const t = three.clock.elapsedTime * speed + offset;
    const h = Math.abs(Math.sin(t));
    const squash = 1 - Math.pow(1 - h, 6) * 0.24;
    const stretch = 1 / Math.sqrt(squash);
    body.current.position.y = h * 0.45;
    body.current.scale.set(stretch, squash, stretch);
    body.current.rotation.z = Math.sin(t * 0.5) * 0.12;

    const b = blink.current;
    const now = three.clock.elapsedTime;
    if (now > b.at) {
      b.start = now;
      b.at = now + 2 + Math.random() * 3;
    }
    const k = (now - b.start) / 0.16;
    eyes.current.scale.y = k >= 0 && k < 1 ? 0.15 + 0.85 * Math.abs(Math.cos(k * Math.PI)) : 1;
  });

  return (
    <group {...props}>
      <group ref={body}>
        <RoundedBox args={[0.8, 0.8, 0.8]} radius={0.2} smoothness={5} position={[0, 0.4, 0]} material={m.shell} />
        <group position={[0, 0.44, 0.405]}>
          <group ref={eyes}>
            {[-0.15, 0.15].map((x) => (
              <group key={x} position={[x, 0.04, 0]}>
                <mesh material={m.face}>
                  <sphereGeometry args={[0.065, 20, 20]} />
                </mesh>
                <mesh position={[0.02, 0.025, 0.05]} material={m.shine}>
                  <sphereGeometry args={[0.018, 10, 10]} />
                </mesh>
              </group>
            ))}
          </group>
          <mesh position={[0, -0.1, 0]} rotation-z={Math.PI} material={m.face}>
            <torusGeometry args={[0.06, 0.016, 8, 20, Math.PI]} />
          </mesh>
          {[-0.26, 0.26].map((x) => (
            <mesh key={x} position={[x, -0.08, 0.001]} material={m.blush}>
              <circleGeometry args={[0.055, 20]} />
            </mesh>
          ))}
        </group>
        <mesh position={[0, 0.9, 0]} material={m.face}>
          <cylinderGeometry args={[0.018, 0.018, 0.2, 8]} />
        </mesh>
        <mesh position={[0, 1.02, 0]} material={m.sprout}>
          <sphereGeometry args={[0.06, 16, 16]} />
        </mesh>
        <Glow color={sprout} scale={0.6} position-y={1.02} />
      </group>
    </group>
  );
};

export default Bit;
