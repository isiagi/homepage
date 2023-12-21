import React from "react";

import { SiCoffeescript } from "react-icons/si";

function Hero() {
  return (
    <div className="bg-[url('/images/home1.jpg')] min-h-[100vh] bg-cover bg-no-repeat bg-center text-white flex items-center md:justify-end justify-start">
      <div className="px-5">
        <div className="flex justify-center mb-5">
          <SiCoffeescript className="text-7xl" />
        </div>
        <h1 className="text-6xl font-semibold">Coffee Heaven</h1>
        <p className="max-w-[500px] text-lg py-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>

        <button className="border-2 p-4 hover:border-[#BE9C79] hover:bg-[#BE9C79]">
          SHOP HERE
        </button>
      </div>
    </div>
  );
}

export default Hero;
