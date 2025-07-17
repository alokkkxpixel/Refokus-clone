import { motion } from "framer-motion";
import React from "react";

const Marquee = ({ imgUrls, direction = "left" }) => {
  const animateX = direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"];

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        animate={{ x: animateX }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 10, // Adjust speed as you like
            ease: "linear",
          },
        }}
        className="flex items-center gap-20 py-5"
      >
        {[...imgUrls, ...imgUrls].map((url, index) => (
          <img key={index} src={url} className="h-12 w-auto" />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
