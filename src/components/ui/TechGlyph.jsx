import { TECH } from "../../constants/tech";

// Monochrome brand mark for a technology; renders nothing when there isn't one (e.g. SQL).
const TechGlyph = ({ name, className = "h-3.5 w-3.5" }) => {
  const icon = TECH[name];
  if (!icon) return null;
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  );
};

export default TechGlyph;
