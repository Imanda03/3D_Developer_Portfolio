import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { AlertCircle, CheckCircle2, X } from "lucide-react";

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 min-w-[320px] max-w-md"
    >
      <div
        className={`
        p-4 rounded-lg shadow-lg flex items-center justify-between
        ${type === "success" ? "bg-green-600" : "bg-red-600"} text-white
      `}
      >
        <div className="flex items-center gap-3">
          {type === "success" ? (
            <CheckCircle2 className="w-6 h-6 shrink-0" />
          ) : (
            <AlertCircle className="w-6 h-6 shrink-0" />
          )}
          <p className="font-medium">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="ml-4 hover:opacity-80 transition-opacity"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace these with your actual EmailJS credentials
      const serviceId = "service_rjqpv5a";
      const templateId = "template_rfz8pee";
      const publicKey = "e7DKSL0XNxPXIxvyc";

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing");
      }

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "Anish Sharma",
          from_email: form.email,
          to_email: "asis03ktm@gmail.com",
          message: form.message,
        },
        publicKey
      );

      console.log("Email sent successfully:", result);

      setToast({
        type: "success",
        message: "Thank you! I will get back to you as soon as possible.",
      });

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      setToast({
        type: "error",
        message: "Failed to send email. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <AnimatePresence>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>

      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-opacity-90 transition-all disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");