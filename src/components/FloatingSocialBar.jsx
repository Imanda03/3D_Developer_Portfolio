import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  Github,
  X,
} from "lucide-react";

const FloatingSocialBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/9779803708637",
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      hoverBg: "hover:bg-green-500/30",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/imanda03/",
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      hoverBg: "hover:bg-blue-500/30",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/imanda03/",
      color: "text-pink-400",
      bgColor: "bg-pink-500/20",
      hoverBg: "hover:bg-pink-500/30",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/anish-sharma-41455423b/",
      color: "text-blue-300",
      bgColor: "bg-blue-600/20",
      hoverBg: "hover:bg-blue-600/30",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/imanda03",
      color: "text-gray-300",
      bgColor: "bg-gray-600/20",
      hoverBg: "hover:bg-gray-600/30",
    },
  ];

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-30 hidden lg:block">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="relative"
      >
        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-[#915eff] to-[#6a3fcf] flex items-center justify-center shadow-lg shadow-[#915eff]/50 mb-4 backdrop-blur-sm border border-[#915eff]/30"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Social Links */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-3"
            >
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-14 h-14 rounded-full ${social.bgColor} ${social.hoverBg} border border-white/10 flex items-center justify-center backdrop-blur-sm group relative overflow-hidden`}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${social.color.replace(
                        "text-",
                        "from-"
                      )} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    />
                    <IconComponent
                      className={`${social.color} w-6 h-6 relative z-10 group-hover:scale-110 transition-transform duration-300`}
                    />
                    {/* Tooltip */}
                    <motion.div
                      className="absolute left-full ml-3 px-3 py-1.5 rounded-lg bg-black/90 text-white text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 backdrop-blur-sm border border-white/10"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      {social.name}
                      <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-black/90" />
                    </motion.div>
                  </motion.a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default FloatingSocialBar;
