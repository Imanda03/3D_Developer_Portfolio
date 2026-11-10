const Background = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink" aria-hidden="true">
    <div className="ambient absolute inset-0" />
    <div className="grain" />
  </div>
);

export default Background;
