import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, X } from "lucide-react";
import { socials } from "../constants";

const links = [
  ["WhatsApp", socials.whatsapp],
  ["LinkedIn", socials.linkedin],
  ["GitHub", socials.github],
  ["Instagram", socials.instagram],
  ["Facebook", socials.facebook],
];

// Quick contact, always one tap away in the bottom-right corner.
const ContactDock = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.ul
            id="contact-dock"
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="w-52 origin-bottom-right overflow-hidden rounded-2xl border border-white/10 bg-ink/95 p-1.5 shadow-2xl backdrop-blur-xl"
          >
            {links.map(([name, url]) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm text-fg/90 transition hover:bg-white/[0.06] hover:text-fg"
                >
                  {name}
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted" />
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.4, type: "spring", stiffness: 260, damping: 20 }}
        whileTap={{ scale: 0.92 }}
        className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-ink/90 text-fg shadow-xl backdrop-blur-xl transition hover:border-fg"
        aria-expanded={open}
        aria-controls="contact-dock"
        aria-label={open ? "Close quick contact" : "Open quick contact"}
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        {!open && <span className="absolute right-0.5 top-0.5 h-2.5 w-2.5 rounded-full bg-accent ring-2 ring-ink" aria-hidden="true" />}
      </motion.button>
    </div>
  );
};

export default ContactDock;
