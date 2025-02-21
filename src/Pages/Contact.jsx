import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-blue-700 to-indigo-900 min-h-screen flex flex-col items-center justify-center px-6">
      
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-white text-center mb-6"
      >
        Contact Us
      </motion.h1>

      {/* Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-3xl bg-white/10 backdrop-blur-lg text-white p-8 rounded-2xl shadow-2xl text-center"
      >
        <p className="text-lg font-medium">
          If you have any <span className="font-bold">questions, comments, or concerns</span>, feel free to reach out.  
          We value your feedback and will get back to you as soon as possible.
        </p>

        <div className="border-t border-white/30 my-6"></div>

        {/* Contact Email */}
        <div className="flex flex-col items-center">
          <Mail className="w-10 h-10 text-white mb-3" />
          <p className="text-lg font-semibold">Email Us At:</p>
          <a
            href="mailto:contact@picturetotext.co"
            className="text-lg text-blue-300 hover:text-blue-500 transition-all"
          >
            contact@picturetotext.co
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
