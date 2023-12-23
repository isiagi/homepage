import React from "react";
import { CiCoffeeBean } from "react-icons/ci";

import { SiCoffeescript } from "react-icons/si";

function Hero() {
  return (
    <div className="bg-[url('/images/home1.jpg')] bg-black bg-opacity-[0.4] bg-blend-overlay min-h-[100vh] bg-cover bg-fixed bg-no-repeat bg-center text-white flex items-center md:justify-end justify-center">
      <div className="px-5 flex flex-col items-center">
        <div className="flex justify-center mb-5">
          <SiCoffeescript className="text-7xl" />
        </div>
        <h1 className="text-6xl font-semibold pb-3 text-center">
          COFFEE HEAVEN
        </h1>
        <CiCoffeeBean className="text-[#BE9C79] text-4xl mx-auto" />
        <p className="max-w-[500px] md:block hidden text-lg py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>

        <button className="border-2 p-4 hover:border-[#BE9C79] hover:bg-[#BE9C79] place-items-center w-fit md:mt-0 mt-4">
          SHOP HERE
        </button>
      </div>
    </div>
  );
}

export default Hero;

// https://youtu.be/U_np8e0Z0HE
