import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex justify-between items-center bg-zinc-900 border-b border-zinc-600">
      <div className=" n-left flex items-center ">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="links flex  gap-12 ml-20">
          {["Home", "Work", "Culture", "Blog", "", "News"].map(
            (elem, index) => (
              <a href="#" className="text-sm flex items-center gap-1">
                {elem.length === 0 ? (
                  <span className="w-[2px] h-12 bg-zinc-700"></span>
                ) : (
                  <>
                    {index === 1 && (
                      <span
                        style={{ boxShadow: "0 0 0.45em #00ff19" }}
                        className="inline-block w-2 h-2 rounded-full bg-green-600 mr-1"
                      ></span>
                    )}
                    {elem}
                  </>
                )}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
