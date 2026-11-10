import { experiences, projects } from "../constants";

const names = [
  ...projects.filter((p) => p.kind === "professional").map((p) => p.name.replace(" E-Commerce", "").replace(" LMS", "")),
  ...experiences.map((e) => e.company.replace(" Pvt. Ltd", "")),
];

const Star = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 sm:h-7 sm:w-7" aria-hidden="true">
    <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z" fill="currentColor" />
  </svg>
);

// Crossed colour bands carrying the teams and products I've shipped with.
const Marquee = () => (
  <section aria-label={`Shipped with ${names.join(", ")}`} className="relative z-10 -my-4 overflow-hidden py-10 sm:py-14">
    <div className="absolute inset-x-[-5%] top-1/2 h-14 -translate-y-1/2 rotate-[2.5deg] bg-cobalt sm:h-20" aria-hidden="true">
      <div className="flex h-full items-center gap-6 whitespace-nowrap px-6 font-mono text-[11px] uppercase tracking-[0.3em] text-fg/80">
        {Array.from({ length: 16 }, (_, i) => (
          <span key={i}>Shipped in production ·</span>
        ))}
      </div>
    </div>
    <div className="relative -rotate-[1.5deg] bg-accent py-4 text-ink sm:py-6" aria-hidden="true">
      <div className="marquee overflow-hidden">
        <div className="marquee__track">
          {[...names, ...names].map((name, i) => (
            <span
              key={i}
              className="flex items-center gap-8 whitespace-nowrap px-4 font-serif text-[40px] italic leading-none sm:gap-12 sm:px-6 sm:text-[72px]"
            >
              {name}
              <Star />
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Marquee;
