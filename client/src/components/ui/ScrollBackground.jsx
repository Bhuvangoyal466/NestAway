import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollBackground = () => {
  const { scrollYProgress } = useScroll();

  // Increase movement effect by changing transform values
  const translateY1 = useTransform(scrollYProgress, [0, 1], ["0px", "-300px"]);
  const translateY2 = useTransform(scrollYProgress, [0, 1], ["0px", "250px"]);
  const translateY3 = useTransform(scrollYProgress, [0, 1], ["0px", "-400px"]);
  const translateY4 = useTransform(scrollYProgress, [0, 1], ["0px", "350px"]);
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "720deg"]);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-gray-900">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-purple-800 to-black opacity-80" />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-70"
        style={{ y: translateY1 }}
      />
      <motion.div
        className="absolute top-40 right-20 w-24 h-24 bg-purple-500 rounded-full opacity-60"
        style={{ y: translateY2 }}
      />
      <motion.div
        className="absolute bottom-20 left-1/3 w-16 h-16 bg-pink-400 rounded-lg opacity-80"
        style={{ rotate }}
      />
      <motion.div
        className="absolute top-80 left-1/4 w-28 h-28 bg-yellow-400 rounded-full opacity-50"
        style={{ y: translateY3 }}
      />
      <motion.div
        className="absolute bottom-40 right-1/3 w-20 h-20 bg-green-400 rounded-full opacity-70"
        style={{ y: translateY4 }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-14 h-14 bg-red-400 rounded-lg opacity-60"
        style={{ rotate }}
      />
      <motion.div
        className="absolute top-1/2 right-10 w-24 h-24 bg-cyan-500 rounded-full opacity-60"
        style={{ y: translateY2, rotate }}
      />
    </div>
  );
};

export default ScrollBackground;
