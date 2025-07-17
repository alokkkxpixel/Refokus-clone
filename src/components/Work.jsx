import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import React, { useState } from "react";

const Work = () => {
  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "55%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "58%",
      left: "62%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "70%",
      left: "47%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: " 68%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "72%",
      left: "55%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imageShow(arr) {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        imageShow([]);
        break;
      case 1:
        imageShow([0, 1]);
        break;
      case 2:
        imageShow([0, 1, 2]);
        break;
      case 3:
        imageShow([0, 1, 2, 3]);
        break;
      case 4:
        imageShow([0, 1, 2, 3, 4]);
        break;
      case 5:
        imageShow([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full  ">
      <div className="relative max-w-screen-xl mx-auto   text-center">
        <h1 className="text-[30vw] leading-none mt-10 select-none font-medium tracking-tight">
          Work
        </h1>
        <div className=" absolute w-full h-full top-0 bg--100">
          {images.map(
            (image, index) =>
              image.isActive && (
                <img
                  key={index}
                  className="w-60 select-none rounded-lg absolute  -translate-x-[50%] -translate-y-[50%]"
                  src={image.url}
                  style={{ top: image.top, left: image.left }}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
