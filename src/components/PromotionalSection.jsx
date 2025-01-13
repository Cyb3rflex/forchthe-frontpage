import React from "react";
import { motion } from "framer-motion";

const PromotionalSection = () => {
  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="bg-gray-900 text-white py-12 px-6 text-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}>
      {/* Header Section */}
      <motion.div className="mb-8" variants={itemVariants}>
        <h2 className="text-4xl font-bold mb-4">
          We Build Solutions to Help Businesses of All Sizes Scale
        </h2>
        <p className="text-xl">
          Our experience and expertise are unparalleled.
        </p>
      </motion.div>

      {/* Grid Section */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8"
        variants={containerVariants}>
        <motion.div className="bg-gray-800 p-6 rounded" variants={itemVariants}>
          <h3 className="text-3xl font-bold mb-2">50+</h3>
          <p className="text-lg">Clients</p>
        </motion.div>
        <motion.div className="bg-gray-800 p-6 rounded" variants={itemVariants}>
          <h3 className="text-3xl font-bold mb-2">120+</h3>
          <p className="text-lg">Projects</p>
        </motion.div>
        <motion.div className="bg-gray-800 p-6 rounded" variants={itemVariants}>
          <h3 className="text-3xl font-bold mb-2">10+</h3>
          <p className="text-lg">Team Leads</p>
        </motion.div>
        <motion.div className="bg-gray-800 p-6 rounded" variants={itemVariants}>
          <h3 className="text-3xl font-bold mb-2">10+</h3>
          <p className="text-lg">Glorious Years</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default PromotionalSection;
