
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll";

function Footer() {
  // Split nav items into two arrays for two lines on mobile
  const line1 = ["hero", "about", "skills"];
  const line2 = ["projects", "experience", "contact"];

  return (
    <footer className="text-gray-300 pt-12 pb-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Developer Name */}
        <motion.h2
          className="text-2xl font-bold text-cyan-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Raj Sharma
        </motion.h2>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2 md:flex-row md:gap-6">
          {/* Line 1 */}
          <motion.div
            className="flex gap-6 text-sm flex-nowrap overflow-x-auto whitespace-nowrap justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {line1.map((item, index) => (
              <Link
                key={index}
                to={item}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-cyan-400 transition min-w-fit"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </motion.div>

          {/* Line 2 */}
          <motion.div
            className="flex gap-6 text-sm flex-nowrap overflow-x-auto whitespace-nowrap justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {line2.map((item, index) => (
              <Link
                key={index}
                to={item}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-cyan-400 transition min-w-fit"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          className="flex gap-5 text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://github.com/raj98897"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
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
            className="hover:text-sky-400 transition"
          >
            <FaXTwitter />
          </a>
          <a
            href="mailto:raj98897sharma@gmail.com"
            className="hover:text-red-400 transition"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>

      {/* Bottom Line */}
      <motion.div
        className="mt-10 text-center text-xs text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        © {new Date().getFullYear()} • Developed with 💙 by{" "}
        <span className="text-cyan-400 font-medium">Raj Sharma</span>
      </motion.div>
    </footer>
  );
}

export default Footer;
