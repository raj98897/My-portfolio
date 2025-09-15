

import { motion } from "framer-motion";
import profile from "../assets/Aboutme.png"; // Use rectangle image

function About() {
  return (
    <section
      id="about"
      className="bg-hero-gradient text-white min-h-screen flex items-center px-6 py-16 scroll-mt-20 "
    >
      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="text-center md:text-left">
  <h2 className="text-5xl sm:text-6xl font-bold text-cyan-400 animate-glow-heading">
    About Me
  </h2>

  {/* Centered glowing line just below heading */}
  <div className="mx-auto md:mx-0 mt-2 h-[3px] w-24 bg-cyan-400 rounded-full animate-pulse-left-glow"></div>
</div>


          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
            I'm <span className="text-white font-semibold">Raj Sharma</span>, a dedicated 
            <span className="text-cyan-300 font-medium"> Full Stack MERN Developer</span> and final-year B.Tech CSE student, passionate about building modern, scalable, and high-performance web applications. My expertise lies in MongoDB, Express.js, React.js, and Node.js, with a strong focus on integrating AI-powered features into real-world products.<br/><br/>

 <span className="text-cyan-400 font-medium"> My key projects include:</span>
<br/>

 <span className="text-white font-semibold">Rose-Chatbot –</span> AI-powered bot which are working based on gemini api, it respond to your query. .<br/>

<span className="text-white font-semibold">ShopEasy-Ecommerce –</span> Ecommerce website which have gmail authentication, razorpay integration, and JWT auth.<br/>

<span className="text-white font-semibold">Quirex-RealEstate –</span> Full-stack Real Estate website with interactive property and smooth UI/UX.<br/>
          </p>
          <p className="text-gray-400 text-base sm:text-lg">
         I’m seeking opportunities in innovative, fast-paced teams where I can apply my skills, contribute to impactful projects, and grow as a versatile full-stack engineer.
          </p>
        </motion.div>

       {/* Right Side - Animated Image */}
       <motion.div
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="flex justify-center md:justify-end"
>
  <div className="relative group w-full sm:w-[340px] md:w-[400px] lg:w-[480px] transition-transform duration-300">
    <img
      src={profile}
      alt="Raj Sharma"
      className="w-full rounded-4xl h-auto object-cover transform 
      group-hover:-translate-y-2 
      group-hover:-translate-x-3 
      group-hover:scale-105 
      transition-transform duration-500 ease-in-out"
    />
  </div>
      </motion.div>

       
       
      </div>
    </section>
  );
}

export default About;
