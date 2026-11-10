import { Environment, Lightformer } from "@react-three/drei";

// Studio rig: a cool key, ice-cyan / orange rims and an offline environment for glossy reflections.
const StudioLights = () => (
  <>
    <ambientLight intensity={0.35} />
    <directionalLight position={[3, 6, 5]} intensity={1.6} />
    <pointLight position={[-4, 1.5, 3]} intensity={35} distance={14} color="#8be9ff" />
    <pointLight position={[4, 0, 2.5]} intensity={35} distance={14} color="#ff6b2c" />
    <pointLight position={[0, -2.5, 2]} intensity={14} distance={8} color="#3a5cff" />
    <Environment resolution={256} frames={1}>
      <Lightformer form="rect" intensity={2.2} position={[0, 5, -1]} rotation-x={Math.PI / 2} scale={[10, 3, 1]} />
      <Lightformer form="rect" intensity={3} color="#8be9ff" position={[-5, 1, 1]} rotation-y={Math.PI / 2} scale={[3, 7, 1]} />
      <Lightformer form="rect" intensity={3} color="#ff6b2c" position={[5, 1, 1]} rotation-y={-Math.PI / 2} scale={[3, 7, 1]} />
      <Lightformer form="ring" intensity={2.5} color="#3a5cff" position={[0, 1, 6]} scale={3} />
    </Environment>
  </>
);

export default StudioLights;
