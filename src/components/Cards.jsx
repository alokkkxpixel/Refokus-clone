import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";

const Cards = () => {
  return (
    <div className="w-full ">
      <div className="max-w-screen-xl mx-auto   flex items-center gap-3   p-10 ">
        <Card width={"w-[30%]"} start={false} para={true} />
        <Card
          width={"w-[70%]"}
          start={true}
          para={false}
          hoverBg={"bg-violet-500"}
          hover={"bg-violet-500"}
        />
      </div>
    </div>
  );
};

export default Cards;
