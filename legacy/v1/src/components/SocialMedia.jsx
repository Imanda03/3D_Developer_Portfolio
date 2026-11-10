import React, { memo } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  Github,
  Phone,
} from "lucide-react";

const SocialMedia = () => {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/9779803708637",
      color: "from-green-500 to-emerald-600",
      hoverColor: "hover:from-green-400 hover:to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/imanda03/",
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-500 hover:to-blue-700",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/ag_aneesh/",
      color: "from-pink-500 via-purple-500 to-orange-500",
      hoverColor:
        "hover:from-pink-400 hover:via-purple-400 hover:to-orange-400",
      bgColor:
        "bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-orange-500/10",
      borderColor: "border-pink-500/30",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/anish-sharma-41455423b/",
      color: "from-blue-700 to-blue-900",
      hoverColor: "hover:from-blue-600 hover:to-blue-800",
      bgColor: "bg-blue-700/10",
      borderColor: "border-blue-700/30",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/imanda03",
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:from-gray-600 hover:to-gray-800",
      bgColor: "bg-gray-700/10",
      borderColor: "border-gray-700/30",
    },
  ];

  const phoneNumber = "+977 9803708637";

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <h3 className="text-white font-bold text-2xl mb-2">Connect With Me</h3>
        <p className="text-secondary text-sm">
          Let's build something amazing together!
        </p>
      </motion.div>

      {/* Phone Number Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.3 }}
        className="mb-6"
      >
        <a
          href={`https://wa.me/9779803708637`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30 p-6 backdrop-blur-sm hover:border-green-500/60 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center gap-4">
              <motion.div
                className="w-14 h-14 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Phone className="w-7 h-7 text-white" />
              </motion.div>
              <div className="flex-1">
                <p className="text-secondary text-sm mb-1">Phone / WhatsApp</p>
                <p className="text-white font-bold text-lg group-hover:text-green-400 transition-colors duration-300">
                  {phoneNumber}
                </p>
              </div>
              <div className="text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <MessageCircle className="w-6 h-6" />
              </div>
            </div>
          </div>
        </a>
      </motion.div>

      {/* Social Media Icons Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative"
            >
              <div
                className={`relative overflow-hidden rounded-2xl ${social.bgColor} border ${social.borderColor} p-6 backdrop-blur-sm hover:border-opacity-60 transition-all duration-300 h-full flex flex-col items-center justify-center gap-3`}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />

                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`relative w-12 h-12 rounded-xl bg-gradient-to-r ${social.color} flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                {/* Label */}
                <p className="relative text-white font-semibold text-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 transition-all duration-300">
                  {social.name}
                </p>

                {/* Hover Arrow */}
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};

export default memo(SocialMedia);
