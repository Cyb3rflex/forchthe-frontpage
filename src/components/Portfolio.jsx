import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const images = [
    "https://forcythe.com/images/Project%20Images/exec-pro.svg",
    "https://forcythe.com/images/Project%20Images/africaFund.svg",
    "https://forcythe.com/images/Project%20Images/activity.svg",
    "https://forcythe.com/images/Project%20Images/phone.svg",
    "https://forcythe.com/images/Project%20Images/stac.svg",
    "https://forcythe.com/images/Project%20Images/starks.svg",
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* First Animation: Right to Left */}
      <div className="overflow-hidden relative">
        <motion.div
          className="flex"
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
          }}>
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Project ${index + 1}`}
              className="w-1/3 h-auto rounded"
            />
          ))}
        </motion.div>
      </div>

      {/* Second Animation: Left to Right */}
      <div className="overflow-hidden relative mt-10">
        <motion.div
          className="flex"
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
          }}>
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Project ${index + 1}`}
              className="w-1/3 h-auto rounded"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
