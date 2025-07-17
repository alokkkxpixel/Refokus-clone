import { motion } from "framer-motion";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({ title = "Get Started" }) => {
  return (
    <div className="max-w-40 px-3 py-2 bg-zinc-100 flex items-center gap-5 overflow-hidden text-black rounded-full">
      <motion.span
        initial={{ y: 0, opacity: 1 }}
        whileHover={{ y: -30, opacity: 0.5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="   flex items-center gap-3 text-sm font-medium"
      >
        {title}
        <FaArrowRightLong />
      </motion.span>
    </div>
  );
};

export default Button;
