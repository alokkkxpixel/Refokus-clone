import { motion } from "framer-motion";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdPadding } from "react-icons/md";

const Card = ({ width, start, para, hover }) => {
  return (
    <motion.div
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      initial={{
        padding: "1.2rem",
        // backgroundColor: "bg-zinc-200", // zinc-700
      }}
      whileHover={{
        padding: "1.8rem",
        // backgroundColor: hoverBg ? hoverBg : "#3f3f46",
      }}
      className={` bg-zinc-800 ${width} ${hover ? "hover:bg-violet-500" : ""}
 min-h-[30rem] flex flex-col items-center justify-between rounded-md p-3  `}
    >
      <div className="w-full">
        <div className=" w-full flex items-center justify-between">
          <h1>One section </h1>
          <FaArrowRightLong className="text-2xl text-zinc-300" />
        </div>
        <h1 className="text-3xl font-semibold mt-3">Whatwever heading </h1>
      </div>
      <div className="down w-full mt-">
        {start && (
          <>
            <h1 className="text-6xl font-semibold">Start a Project</h1>
            <button className="py-2 px-4 my-5  border border-white rounded-full  text-white">
              Contact Us
            </button>
          </>
        )}

        {para && (
          <>
            <p className="text-sm text-zinc-500 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
