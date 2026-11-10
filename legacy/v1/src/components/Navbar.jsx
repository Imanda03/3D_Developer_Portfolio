import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { Github, Linkedin } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled
          ? "bg-primary/80 backdrop-blur-xl shadow-2xl shadow-[#915eff]/20"
          : "bg-primary"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <motion.img
              src={logo}
              alt="logo"
              className="w-9 h-9 object-contain"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#915eff] group-hover:from-[#915eff] group-hover:to-white transition-all duration-300">
                Anish
              </span>
              &nbsp;
              <span className="sm:block hidden text-secondary group-hover:text-[#915eff] transition-colors duration-300">
                | Full Stack Developer
              </span>
            </p>
          </Link>
        </motion.div>
        <div className="flex items-center gap-6">
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <a
                  href={`#${link.id}`}
                  className={`relative ${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-300 group`}
                  onClick={() => setActive(link.title)}
                >
                  {link.title}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#915eff] to-[#6a3fcf] group-hover:w-full transition-all duration-300"
                    initial={false}
                    animate={{
                      width: active === link.title ? "100%" : "0%",
                    }}
                  />
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Social Media Icons */}
          <div className="hidden sm:flex items-center gap-3">
            <motion.a
              href="https://github.com/imanda03"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-tertiary/50 border border-secondary/30 flex items-center justify-center hover:border-[#915eff]/60 hover:bg-[#915eff]/10 transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5 text-secondary group-hover:text-[#915eff] transition-colors duration-300" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/anish-sharma-41455423b/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-tertiary/50 border border-secondary/30 flex items-center justify-center hover:border-blue-500/60 hover:bg-blue-500/10 transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-5 h-5 text-secondary group-hover:text-blue-400 transition-colors duration-300" />
            </motion.a>
          </div>
        </div>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[29px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  }font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
