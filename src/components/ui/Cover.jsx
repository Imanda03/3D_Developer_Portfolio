import TechGlyph from "./TechGlyph";

const TONE = {
  cobalt: "bg-cobalt text-fg",
  tangerine: "bg-accent text-ink",
  ice: "bg-ice text-ink",
  night: "bg-elev text-fg",
};

// Typographic stand-in for projects without a public screenshot.
const Cover = ({ name, tags = [], note, tone = "cobalt", compact = false, className = "" }) => (
  <div className={`relative flex h-full w-full flex-col justify-between overflow-hidden p-6 sm:p-8 ${TONE[tone]} ${className}`}>
    <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] opacity-75">
      <span>{note}</span>
      <span className="flex gap-2">
        {tags.slice(0, 3).map((t) => (
          <TechGlyph key={t} name={t} className="h-4 w-4" />
        ))}
      </span>
    </div>
    <p
      className={`font-serif italic leading-[0.9] tracking-[-0.02em] ${
        compact ? "text-[38px]" : "text-[clamp(48px,7vw,104px)]"
      }`}
    >
      {name}
    </p>
    <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full border border-current opacity-20" />
    <div className="pointer-events-none absolute -bottom-10 -right-4 h-40 w-40 rounded-full border border-current opacity-20" />
  </div>
);

export default Cover;
