
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "/images/favicon.jpg";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-6 pt-28 md:pt-29 pb-12   gap-20  md:gap-60"
    >
      {/* Left Text Content */}
      <motion.div
        className="text-center md:text-left max-w-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-cyan-400">Hi, I'm Raj Sharma</h1>
        <h2 className="text-2xl md:text-3xl mt-4 font-semibold text-white">
          <TypeAnimation
            sequence={[
              "Full Stack MERN Developer", 1700,
              "AI-Powered Application Builder", 1700,
              "React.js & Node.js Specialist", 1700,
              "Scalable Web Solutions Expert", 1700,
              "Problem Solver & Fast Learner", 1700
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="inline-block text-cyan-300"
          />
        </h2>
        <p className="mt-6 text-gray-300 text-lg">
         Full Stack Engineer crafting modern, scalable, and AI-powered web solutions with MERN stack expertise.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6 flex-wrap justify-center md:justify-start">
          <a
            href="/RajATSResume.pdf"
            download
            className="relative inline-block px-6 py-3 font-semibold border-2 border-cyan-400 text-cyan-400 hover:text-white group overflow-hidden btn-floaty rounded-2xl"
          >
            <span className="absolute inset-0 w-full h-full bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-in-out z-0"></span>
            <span className="relative z-10">Download Resume</span>
          </a>

          <a
            href="#contact"
            className="relative inline-block px-6 py-3 font-semibold border-2 border-fuchsia-400 text-fuchsia-400 hover:text-white group overflow-hidden btn-floaty rounded-2xl"
          >
            <span className="absolute inset-0 w-full h-full bg-fuchsia-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-300 ease-in-out z-0"></span>
            <span className="relative z-10">Hire Me</span>
          </a>
        </div>
      </motion.div>

      {/* Right Image with Ring */}
      <motion.div
        className="relative w-96 h-96 md:w-100 md:h-100 group"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute -inset-4 flex items-center justify-center pointer-events-none z-0">
          <div className="w-full h-full hexagon-ring animate-spin-slow"></div>
        </div>
        <motion.img
          src={profile}
          alt="Raj Sharma"
          className="w-full h-full object-cover rounded-full ring-[10px] ring-cyan-300 z-10 relative group-hover:animate-float"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
