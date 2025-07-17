import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto flex gap-32  py-10">
        <div className="basic-1/2">
          <h1 className="text-[11rem] font-medium tracking-tight leading-none">
            Refokus.
          </h1>
        </div>
        <div className="basic-1/2 bg--100 flex gap-25">
          <div className="flex flex-col justify-between items-center">
            <div className="flex items-center justify-center">
              <h4 className="text text-zinc-400 text-center">Social</h4>
            </div>
            <div className="flex flex-col gap-3 items-start">
              <a className="text-ms font-light text-zinc-500 " href="#">
                Tweeter
              </a>
              <a className="text-ms font-light text-zinc-500 " href="#">
                instagram
              </a>
              <a className="text-ms font-light text-zinc-500 " href="#">
                Facebook
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center">
            <div className="flex items-center justify-center">
              <h1 className="text-xl font-inter  text-zinc-400">Sitemap</h1>
            </div>
            <div className="flex flex-col gap-2 items-start justify-center">
              <a className="text-ms font-light text-zinc-200 " href="#">
                Home
              </a>
              <a className="text-ms font-light text-zinc-200 " href="#">
                Work
              </a>
              <a className="text-ms font-light text-zinc-200 " href="#">
                Carrer
              </a>
              <a className="text-ms font-light text-zinc-200 " href="#">
                Contact
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <div className="flex flex-col items-end ">
              <h4 className="text-zinc-100 font-light">Refokus is</h4>
              <h4 className="text-zinc-100 font-light">pioneering digital</h4>
              <h4 className="text-zinc-100 font-light">agency driven by</h4>
              <h4 className="text-zinc-100 font-light">design and</h4>
              <h4 className="text-zinc-100 font-light">empowered by</h4>
              <h4 className="text-zinc-100 font-light">technology</h4>
            </div>
            <img
              src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
              alt=""
              class="w-24 px-4 py-1 mt-8 bg-blue-600"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
