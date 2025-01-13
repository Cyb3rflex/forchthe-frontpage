import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BenefitsBanner = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Variants for text typing
  const textTyping = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      transition: {
        delay: custom * 0.1,
        duration: 0.05,
      },
    }),
  };

  // Variants for card animation
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      ref={ref}
      className="bg-gray-900 text-white py-12 px-6"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}>
      {/* Animated Heading */}
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={textTyping}>
          {Array.from("Why Choose Us").map((letter, index) => (
            <motion.span key={index} custom={index} variants={textTyping}>
              {letter}
            </motion.span>
          ))}
        </motion.h2>
      </div>

      {/* Benefit Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: "fas fa-lightbulb",
            title: "Experience",
            description:
              "Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth.",
          },
          {
            icon: "fas fa-headset",
            title: "Quick Support",
            description:
              "We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth.",
          },
          {
            icon: "fas fa-dollar-sign",
            title: "Cost Savings",
            description:
              "Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-800 p-6 rounded text-center"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}>
            {/* Cyan border animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-transparent rounded animate-pulse" />
            <div className="relative z-10">
              <div className="text-2xl mb-4">
                <i className={item.icon}></i>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default BenefitsBanner;
