import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { navLinks, socials } from "../constants";
import useNepalTime from "../hooks/useNepalTime";

const useActiveSection = () => {
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
};

const ease = [0.22, 1, 0.36, 1];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();
  const time = useNepalTime();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`border-b transition duration-500 ${
          scrolled || open ? "border-white/10 bg-ink/80 backdrop-blur-xl" : "border-transparent"
        }`}
      >
        <nav
          className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-6 px-5 sm:h-[72px] sm:px-8"
          aria-label="Primary"
        >
          <a href="#top" className="text-[15px] font-medium tracking-tight" onClick={() => setOpen(false)}>
            Anish Sharma<span className="text-accent">.</span>
          </a>

          <p className="hidden font-mono text-[11px] uppercase tracking-[0.14em] text-muted xl:block">
            Full-stack engineer · Nepal {time}
          </p>

          <ul className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={active === link.id ? "true" : undefined}
                  className={`flex items-center gap-2 text-sm transition ${
                    active === link.id ? "text-fg" : "text-muted hover:text-fg"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full bg-accent transition duration-300 ${
                      active === link.id ? "scale-100" : "scale-0"
                    }`}
                    aria-hidden="true"
                  />
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a href="#contact" className="btn hidden bg-accent !px-5 !py-2.5 text-ink hover:bg-fg sm:inline-flex">
              Get in touch
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="flex h-11 items-center gap-3 rounded-full border border-white/15 px-4 text-sm lg:hidden"
            >
              {open ? "Close" : "Menu"}
              <span className="relative h-2.5 w-4" aria-hidden="true">
                <span
                  className={`absolute left-0 h-px w-4 bg-current transition duration-300 ${
                    open ? "top-1/2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 h-px w-4 bg-current transition duration-300 ${
                    open ? "top-1/2 -rotate-45" : "bottom-0"
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease }}
            className="fixed inset-0 -z-10 flex flex-col overflow-y-auto bg-ink px-5 pb-8 pt-24 sm:px-8 lg:hidden"
          >
            <ul className="flex-1">
              {navLinks.map((link, i) => (
                <li key={link.id} className="overflow-hidden border-b border-white/10">
                  <motion.a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6, ease, delay: 0.15 + i * 0.05 }}
                    className="flex items-baseline justify-between py-4 text-[40px] font-medium leading-none tracking-[-0.04em] sm:text-6xl"
                  >
                    {link.title}
                    <span className="font-mono text-xs tracking-normal text-muted">0{i + 1}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-end justify-between gap-4">
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                {[
                  ["GitHub", socials.github],
                  ["LinkedIn", socials.linkedin],
                  ["WhatsApp", socials.whatsapp],
                ].map(([name, url]) => (
                  <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted">
                    {name} <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Nepal {time}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
