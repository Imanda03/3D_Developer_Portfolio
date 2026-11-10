import { lazy, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Loader2 } from "lucide-react";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import Em from "./ui/Em";
import SceneMount from "./canvas/SceneMount";
import useMediaQuery from "../hooks/useMediaQuery";
import { socials } from "../constants";
import { fadeUp } from "../utils/motion";

const ContactCanvas = lazy(() => import("./canvas/ContactCanvas"));

const EMAILJS = {
  serviceId: import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
};

const channels = [
  ["WhatsApp", socials.whatsapp],
  ["LinkedIn", socials.linkedin],
  ["GitHub", socials.github],
];

const EMPTY = { name: "", email: "", message: "" };

const Field = ({ label, id, textarea, ...props }) => {
  const Tag = textarea ? "textarea" : "input";
  return (
    <label htmlFor={id} className="block">
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/70">{label}</span>
      <Tag
        id={id}
        name={id}
        required
        className={`mt-1 w-full border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-lg text-ink placeholder:text-ink/40 transition duration-300 focus:border-ink focus:outline-none sm:text-xl ${
          textarea ? "min-h-[140px] resize-y" : ""
        }`}
        {...props}
      />
    </label>
  );
};

const Contact = () => {
  const lite = useMediaQuery("(max-width: 768px), (pointer: coarse)");
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          from_name: form.name,
          to_name: "Anish Sharma",
          from_email: form.email,
          to_email: "asis03ktm@gmail.com",
          message: form.message,
        },
        { publicKey: EMAILJS.publicKey }
      );
      setForm(EMPTY);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <SectionHeader
        tone="tangerine"
        index="06"
        label="Contact"
        lines={[
          "Got something",
          <>
            to <Em>build</Em>?
          </>,
        ]}
        lead="Send a note below, or reach me directly on WhatsApp or LinkedIn."
      />

      <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-8">
        <motion.form variants={fadeUp()} onSubmit={onSubmit} className="space-y-8 lg:col-span-7 lg:pr-10">
          <div className="grid gap-8 sm:grid-cols-2">
            <Field label="Name" id="name" value={form.name} onChange={onChange} placeholder="Jane Doe" autoComplete="name" />
            <Field
              label="Email"
              id="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="jane@company.com"
              autoComplete="email"
            />
          </div>
          <Field
            label="Message"
            id="message"
            textarea
            rows={5}
            value={form.message}
            onChange={onChange}
            placeholder="What are you building?"
          />
          <div className="flex flex-wrap items-center gap-5">
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn bg-ink px-8 py-4 text-base text-fg hover:bg-cobalt disabled:cursor-wait disabled:opacity-70"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending
                </>
              ) : (
                <>
                  Send message <ArrowUpRight className="h-4 w-4" />
                </>
              )}
            </button>
            <p role="status" aria-live="polite" className="text-sm font-medium text-ink">
              <AnimatePresence mode="wait">
                {status === "sent" && (
                  <motion.span key="sent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    Thanks — message received. I&apos;ll be in touch.
                  </motion.span>
                )}
                {status === "error" && (
                  <motion.span key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    That didn&apos;t send. Please try WhatsApp instead.
                  </motion.span>
                )}
              </AnimatePresence>
            </p>
          </div>
        </motion.form>

        <motion.div variants={fadeUp(0.1)} className="flex flex-col gap-6 lg:col-span-5">
          <SceneMount
            className="h-[340px] overflow-hidden rounded-3xl bg-ink sm:h-[420px]"
            label="Byte the robot holding a letter while paper planes circle around it."
          >
            {(frameloop) => <ContactCanvas frameloop={frameloop} lite={lite} />}
          </SceneMount>
          <ul className="border-b border-ink/20">
            {channels.map(([name, url]) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-t border-ink/20 py-4 text-2xl font-medium tracking-[-0.03em]"
                >
                  {name}
                  <ArrowUpRight className="h-6 w-6 transition duration-300 group-hover:rotate-45" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </>
  );
};

const ContactSection = () => (
  <Section id="contact" tone="tangerine">
    <Contact />
  </Section>
);

export default ContactSection;
