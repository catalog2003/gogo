import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-blue-700 to-indigo-900 min-h-screen flex flex-col items-center justify-center px-6">
      
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-white text-center mb-6"
      >
        About Us
      </motion.h1>

      {/* Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-3xl bg-white/10 backdrop-blur-lg text-white p-8 rounded-2xl shadow-2xl text-center"
      >
        <p className="text-lg font-medium">
          Welcome to our platform! We provide <strong>powerful tools</strong> for text extraction and conversion from images, PDFs, and documents.
        </p>

        <div className="border-t border-white/30 my-6"></div>

        <p className="text-md text-white/90 leading-relaxed">
          Our mission is to make data extraction <span className="font-bold">simple, fast, and accurate</span>. We focus on <span className="font-bold">innovation</span> to enhance your experience.
        </p>

        <div className="border-t border-white/30 my-6"></div>

        <p className="text-md text-white/90 leading-relaxed">
          Our team is dedicated to <span className="font-bold">quality, transparency, and user satisfaction</span>. Explore our tools and experience seamless text conversion!
        </p>
      </motion.div>
    </div>
  );
};

export default About;
