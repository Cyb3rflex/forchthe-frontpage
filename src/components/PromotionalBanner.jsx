import React from "react";
import { motion } from "framer-motion";

const PromotionalBanner = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-6 text-center">
      <div>
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          Ready to Scale?
        </motion.h1>
        <motion.p
          className="text-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}>
          Join successful brands that chose us as their{" "}
          <span className="text-blue-400">growth accelerator</span>
        </motion.p>
        <motion.button
          className="mt-6 bg-white text-gray-900 py-2 px-4 rounded hover:bg-gray-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          Book a Call
        </motion.button>
      </div>
    </section>
  );
};

export default PromotionalBanner;
