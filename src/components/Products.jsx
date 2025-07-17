import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
  let products = [
    {
      title: "Arqites",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda",
      live: true,
      case: true,
    },
    {
      title: "YIR 2024",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda",
      live: true,
      case: false,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23);
  };
  return (
    <div className="mt-20 relative">
      {products.map((elem, index) => (
        <Product key={index} val={elem} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          whileHover="hover"
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
          className="window absolute w-[30rem] h-[23rem] rounded-2xl  left-[45%]  overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            whileHover="hover"
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
            className=" w-full h-full "
          >
            <video
              autoPlay
              muted
              className="w-full h-full "
              src="./arqitel.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
            className=" w-full h-full "
          >
            <video
              autoPlay
              muted
              className="w-full h-full "
              src="./ttr.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
            className=" w-full h-full "
          >
            <video
              autoPlay
              muted
              className="w-full h-full "
              src="./yir.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
            className=" w-full h-full "
          >
            <video
              autoPlay
              muted
              className="w-full h-full "
              src="./yahoo.webm"
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
