import React from "react";
import { motion } from "framer-motion";

const SpotlightSection = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-6">
      <div className="text-center mb-12">
        {/* Animated Header */}
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          From Spark to Spotlight
        </motion.h2>

        {/* Animated Paragraph */}
        <motion.p
          className="text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}>
          We take you every step of the way to success.
        </motion.p>
      </div>

      {/* Animated Steps Section */}
      <div className="flex justify-center mb-8">
        <motion.div
          className="bg-gray-800 text-center py-2 px-4 rounded-l-md"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}>
          Idea
        </motion.div>
        <motion.div
          className="bg-gray-700 text-center py-2 px-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          Design
        </motion.div>
        <motion.div
          className="bg-gray-700 text-center py-2 px-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}>
          Develop
        </motion.div>
        <motion.div
          className="bg-gray-700 text-center py-2 px-4 rounded-r-md"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}>
          Launch
        </motion.div>
      </div>

      <div className="text-center mb-8">
        {/* Animated Subheading */}
        <motion.h3
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}>
          Your vision is unique.
        </motion.h3>

        {/* Animated Paragraph */}
        <motion.p
          className="text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}>
          Nurture your idea into a blueprint for success with our strategic
          insights and industry expertise. Your vision is unique; let's shape it
          together.
        </motion.p>

        {/* Animated Button */}
        <motion.button
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}>
          Book a call
        </motion.button>
      </div>

      <div className="flex justify-center">
        {/* Animated Image */}
        <motion.img
          src="path/to/illustration.png"
          alt="Person with binoculars"
          className="w-1/2 h-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
        />
      </div>
    </section>
  );
};

export default SpotlightSection;
