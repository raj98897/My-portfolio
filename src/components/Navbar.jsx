// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const links = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Experience", to: "experience" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: -50 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="top-0 left-0 w-full z-50 shadow-lg text-white backdrop-blur-md "
      style={{ position: "absolute" }}
    >
      <nav className=" max-w-7xl mx-auto px-6 py-5 md:py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-extrabold tracking-tight">
          <span className="text-white">&lt;</span>
          <span className="text-cyan-400">Raj</span>
          <span className="text-white">/</span>
          <span className="text-cyan-400">Sharma</span>
          <span className="text-white">&gt;</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="text-cyan-400 underline underline-offset-4"
              className="cursor-pointer hover:text-cyan-400 transition text-sm font-medium"
            >
              {link.name}
            </ScrollLink>
          ))}

          {/* Social Icons */}
          <div className="flex items-center gap-4 ml-4">
            <a
              href="https://github.com/raj98897"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/raj-sharma-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden px-6 pb-6 flex flex-col space-y-4 bg-[#0f172a]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="text-cyan-400 underline underline-offset-4"
                className="cursor-pointer hover:text-cyan-400 transition text-base"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </ScrollLink>
            ))}

            {/* Mobile Socials */}
            <div className="flex gap-6 pt-4">
              <a
                href="https://github.com/raj98897"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/raj-sharma-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400"
              >
                <FaXTwitter size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
