import { ArrowUp, ArrowUpRight } from "lucide-react";
import Em from "./ui/Em";
import { navLinks, socials } from "../constants";
import useNepalTime from "../hooks/useNepalTime";

const elsewhere = [
  ["GitHub", socials.github],
  ["LinkedIn", socials.linkedin],
  ["WhatsApp", socials.whatsapp],
  ["Instagram", socials.instagram],
  ["Facebook", socials.facebook],
];

const Footer = () => {
  const time = useNepalTime();
  return (
    <footer className="relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 pb-28 pt-20 sm:px-8 sm:pb-10 sm:pt-28">
        <div className="grid gap-12 md:grid-cols-12">
          <p className="text-[clamp(26px,3vw,40px)] leading-[1.15] tracking-[-0.03em] md:col-span-6">
            Designed and built from scratch — <Em className="text-accent">every robot</Em> on this page is modelled in
            code.
          </p>
          <nav aria-label="Footer" className="md:col-span-2 md:col-start-8">
            <p className="label">Sitemap</p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="link text-fg/85">
                    {l.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-3">
            <p className="label">Elsewhere</p>
            <ul className="mt-4 space-y-2">
              {elsewhere.map(([name, url]) => (
                <li key={name}>
                  <a href={url} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1 text-fg/85">
                    {name} <ArrowUpRight className="h-3.5 w-3.5 text-muted" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p
          className="mt-20 select-none whitespace-nowrap text-[clamp(64px,17.5vw,280px)] font-medium leading-[0.8] tracking-[-0.065em] sm:mt-28"
          aria-hidden="true"
        >
          Anish<Em className="text-accent">.</Em>
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6">
          <p className="label">© {new Date().getFullYear()} Anish Sharma · Nepal {time}</p>
          <a href="#top" className="label inline-flex items-center gap-2 transition hover:text-fg">
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
