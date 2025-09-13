import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

   emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      console.log(result.text);
      setDone(true);
     
      form.current.reset();
    }, (error) => {
     
      console.log(error.text);
    });

  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-8 lg:px-16 text-white bg-[#000214]">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-4 animated-heading "
      >
        Contact Me
      </motion.h2>
        <div className="w-20 h-[2px] bg-cyan-400 mx-auto mb-12"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto bg-white bg-opacity-5 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-cyan-500 experience-card"
      >
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="px-4 py-2 rounded  bg-black border border-white  focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder:text-white placeholder-opacity-70"
              placeholder="Your Name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="px-4 py-2 rounded  bg-black border border-white  focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder:text-white placeholder-opacity-70"
              placeholder="Your Email"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="title" className="text-sm font-semibold mb-1">Subject</label>
            <input
              type="text"
              name="title"
              required
              className="px-4 py-2 rounded  bg-black border border-white  focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder:text-white placeholder-opacity-70"
              placeholder="Subject"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-semibold mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="px-4 py-2 rounded  bg-black border border-white  focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder:text-white placeholder-opacity-70 resize-none"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Send Message
          </button>

          {done && (
            <p className="text-green-400 text-sm text-center mt-2">Message sent successfully ✅</p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
