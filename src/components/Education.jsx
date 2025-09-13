
import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "B.Tech in Computer Science & Engineering",
      school: "AKTU University",
      date: "2022 – 2026 (Final Year)",
      grade: "83% till 5th Semester",
      desc: "Currently pursuing with focus on full-stack development, AI/ML fundamentals & software engineering.",
      img: "/images/aktu.png",
    },
    {
      id: 2,
      degree: "Senior Secondary (12th) – PCM",
      school: "Ram Lakshmi Memorial Inter College",
      date: "2022",
      grade: "75.4%",
      desc: "Studied Physics, Chemistry & Mathematics and problem-solving skills.",
      img: "/images/upboard.png",
    },
    {
      id: 3,
      degree: "Secondary School (10th)",
      school: "Sam Lucknow Public Inter College",
      date: "2020",
      grade: "82.6%",
      desc: "Strong foundation in core academics, with active participation in extracurriculars.",
      img: "/images/upboard.png",
    },
  ];

  return (
    <section
      id="education"
      className="py-24 px-[6vw] font-sans bg-[#03051b]"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white animated-heading">Academic Background</h2>
        <div className="w-36 h-1 bg-cyan-400 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A visual journey through my academic milestones.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-600 h-full z-0"></div>

        {education.map((edu, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={edu.id}
              className="relative flex flex-col sm:flex-row items-center justify-center mb-20 z-10"
            >
              {isLeft && <div className="hidden sm:block w-1/2"></div>}

              {/* Timeline Circle with Image */}
              <div className="sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 w-24 h-24 bg-gray-200 border-4 border-cyan-400 rounded-full flex items-center justify-center z-20 mb-6 sm:mb-0">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`w-full sm:w-[45%] bg-gray-800/60 border border-gray-700 rounded-2xl shadow-2xl backdrop-blur-md p-8 ${
                  isLeft ? "sm:ml-auto" : "sm:mr-auto"
                } transform transition-transform duration-300 hover:scale-105`}
              >
                <h3 className="text-2xl font-semibold  text-cyan-300">{edu.degree}</h3>
                <p className="text-sm text-gray-200 mt-1">{edu.school}</p>
                <p className="text-sm text-gray-400 mt-1">{edu.date}</p>
                <p className="mt-4 text-gray-200 font-bold">Grade: {edu.grade}</p>
                <p className="mt-2 text-gray-300">{edu.desc}</p>
              </motion.div>

              {!isLeft && <div className="hidden sm:block w-1/2"></div>}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
