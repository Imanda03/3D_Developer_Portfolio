// Serif italic emphasis used inside headlines.
const Em = ({ children, className = "" }) => (
  <em className={`font-serif font-normal italic tracking-[-0.01em] ${className}`}>{children}</em>
);

export default Em;
