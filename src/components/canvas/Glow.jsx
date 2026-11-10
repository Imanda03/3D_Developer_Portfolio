import * as THREE from "three";
import { glowTexture } from "./glowTexture";

const Glow = ({ color = "#ffffff", opacity = 0.8, scale = 1, ...props }) => (
  <sprite scale={scale} {...props}>
    <spriteMaterial
      map={glowTexture()}
      color={color}
      transparent
      opacity={opacity}
      blending={THREE.AdditiveBlending}
      depthWrite={false}
      toneMapped={false}
    />
  </sprite>
);

export default Glow;
