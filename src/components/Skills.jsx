
import React from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaGithub
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiExpress, SiVite,
  SiPostman, SiBootstrap, SiMysql, SiRender, SiVercel, SiNetlify
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { motion } from "framer-motion";

const Skills = () => {
  const skillData = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 color="#f06529" /> },
        { name: "CSS", icon: <FaCss3Alt color="#2965f1" /> },
        { name: "JavaScript", icon: <DiJavascript1 color="#f0db4f" /> },
        { name: "React JS", icon: <FaReact color="#61dafb" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="#38bdf8" /> },
        { name: "Redux", icon: <FaReact color="#764abc" /> },
        { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
        { name: "Vite", icon: <SiVite color="#646CFF" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs color="#68a063" /> },
        { name: "Express.js", icon: <SiExpress color="#ffffff" /> },
        { name: "MongoDB", icon: <SiMongodb color="#4db33d" /> },
        { name: "MySQL", icon: <SiMysql color="#00758f" /> },
      ],
    },
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: <FaJs color="#f0db4f" /> },
        { name: "SQL", icon: <SiMysql color="#00758f" /> },
        { name: "C++", icon: <TbBrandCpp color="#00599c" /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt color="#f1502f" /> },
        { name: "GitHub", icon: <FaGithub color="#ffffff" /> },
        { name: "Postman", icon: <SiPostman color="#ff6c37" /> },
        { name: "Render", icon: <SiRender color="#0DB8DE" /> },
        { name: "Vercel", icon: <SiVercel color="#ffffff" /> },
        { name: "Netlify", icon: <SiNetlify color="#38AFBB" /> },
      ],
    },
  ];

  return (
    <div id="skills" className="text-white px-4 py-16">
      <div className="max-w-screen-xl mx-auto text-center">
        <motion.h2
          className="text-5xl sm:text-6xl font-bold text-cyan-400 animate-glow-heading"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        <div className="w-20 h-[2px] bg-cyan-400 mb-4 mx-auto"></div>
        <p className="text-gray-300 mb-10">
          These are the technologies, tools, and languages I have worked with in my web development journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillData.map((category, index) => (
            <motion.div
              key={index}
              className="skill-card"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex flex-col items-center skill-item">
                    <div className="text-3xl">{skill.icon}</div>
                    <p className="mt-1 text-white text-sm">{skill.name}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
