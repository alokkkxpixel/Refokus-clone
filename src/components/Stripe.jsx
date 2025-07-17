import React from "react";

const Stripe = ({ val }) => {
  return (
    <div className="w-[16.66%] py-4 px-5 border border-zinc-500 flex items-center justify-between ">
      <img src={val.url} alt="" />
      <span className="text-white text-xl font-semibold">{val.num}</span>
    </div>
  );
};

export default Stripe;
