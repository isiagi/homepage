import React from "react";
import { CiCoffeeBean } from "react-icons/ci";

function HeaderBanner({ title }) {
  return (
    <div className="flex flex-col justify-center items-center pt-20 pb-14">
      <h1 className="text-4xl text-slate-800">{title}</h1>
      <div className="py-3">
        <CiCoffeeBean className="text-[#BE9C79] text-4xl" />
      </div>
      <p className="max-w-[500px] text-center text-lg text-slate-800">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore
      </p>
    </div>
  );
}

export default HeaderBanner;
