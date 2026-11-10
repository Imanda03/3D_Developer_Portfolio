import { Suspense, useEffect, useRef, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

const Placeholder = () => (
  <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
    <div className="h-40 w-40 animate-pulse rounded-full bg-aurora opacity-20 blur-3xl" />
  </div>
);

// Mounts a lazy WebGL scene once it nears the viewport, then pauses rendering whenever it's off-screen.
const SceneMount = ({ className = "", label, children }) => {
  const ref = useRef(null);
  const [view, setView] = useState({ mounted: false, visible: false });
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) =>
        setView((v) => ({ mounted: v.mounted || entry.isIntersecting, visible: entry.isIntersecting })),
      { rootMargin: "250px 0px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const frameloop = !view.visible ? "never" : reduced ? "demand" : "always";

  return (
    <div ref={ref} className={`relative ${className}`} role="img" aria-label={label}>
      {view.mounted ? (
        <Suspense fallback={<Placeholder />}>{children(frameloop)}</Suspense>
      ) : (
        <Placeholder />
      )}
    </div>
  );
};

export default SceneMount;
