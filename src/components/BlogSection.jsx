import React from "react";
import { motion } from "framer-motion";

const BlogSection = () => {
  // Variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  // Variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="bg-gray-900 text-white py-12 px-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}>
      {/* Section Title */}
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          Read our articles, news, and product blog
        </motion.h2>
      </div>

      {/* Blog Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}>
        <motion.div className="bg-gray-800 p-6 rounded" variants={itemVariants}>
          <h3 className="text-xl font-bold mb-2">Will AI take over Art?</h3>
          <p className="text-gray-400 mb-4">May 29th, 2024</p>
          <p className="mb-4">by Forcythe - The Reformist</p>
        </motion.div>

        <motion.div className="bg-gray-800 p-6 rounded" variants={itemVariants}>
          <h3 className="text-xl font-bold mb-2">Cryptocurrency vs Tokens</h3>
          <p className="text-gray-400 mb-4">May 29th, 2024</p>
          <p className="mb-4">by Forcythe - The Reformist</p>
        </motion.div>

        <motion.div className="bg-gray-800 p-6 rounded" variants={itemVariants}>
          <h3 className="text-xl font-bold mb-2">
            Cryptocurrency and Crypto Asset
          </h3>
          <p className="text-gray-400 mb-4">May 29th, 2024</p>
          <p className="mb-4">by Forcythe - The Reformist</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default BlogSection;
