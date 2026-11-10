import { useEffect } from "react";
import Lenis from "lenis";
import useMediaQuery from "./useMediaQuery";

// Inertial wheel scrolling on desktop; touch devices keep native scrolling.
const useSmoothScroll = () => {
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  useEffect(() => {
    if (reduced) return;
    const lenis = new Lenis({ duration: 1.15, anchors: { offset: -72 } });
    let frame = requestAnimationFrame(function loop(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    });
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [reduced]);
};

export default useSmoothScroll;
