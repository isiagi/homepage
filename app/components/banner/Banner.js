import React from "react";

function Banner() {
  return (
    <div className="min-h-[30vh] bg-[url('/images/one.jpg')] px-5 flex justify-between items-center">
      <h1 className="text-xl">
        LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO
      </h1>
      <button className="border-2 border-[#BE9C79] bg-[#BE9C79] text-white p-4 hover:border-[#121212]">
        SHOP HERE
      </button>
    </div>
  );
}

export default Banner;
