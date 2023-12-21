import React from "react";
import HeaderBanner from "../headerBanner/HeaderBanner";
import { GiCoffeeBeans } from "react-icons/gi";
import { DiCoffeescript } from "react-icons/di";
import { SiBuymeacoffee } from "react-icons/si";
import { GiSlicedBread } from "react-icons/gi";

function Offer() {
  return (
    <div className="pb-20">
      <HeaderBanner title={"OUR DELICIOUS OFFER"} />

      <div className="px-5 grid grid-cols-fluid place-items-center">
        <div className="text-center">
          <DiCoffeescript className="text-[#BE9C79] text-6xl mx-auto" />
          <h3 className="text-xl text-slate-800 py-2">COFFEE TO GO</h3>
          <p className="text-slate-800">
            Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
            Aeneantos commodo
          </p>
        </div>

        <div className="text-center">
          <GiCoffeeBeans className="text-[#BE9C79] text-6xl mx-auto" />
          <h3 className="text-xl text-slate-800 py-2">Type of Coffee</h3>
          <p>
            Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
            Aeneantos commodo
          </p>
        </div>

        <div className="text-center">
          <GiSlicedBread className="text-[#BE9C79] text-6xl mx-auto" />
          <h3 className="text-xl text-slate-800 py-2">BEAN VARIETIES</h3>
          <p>
            Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
            Aeneantos commodo
          </p>
        </div>

        <div className="text-center">
          <SiBuymeacoffee className="text-[#BE9C79] text-6xl mx-auto" />
          <h3 className="text-xl text-slate-800 py-2">COFFEE & PASTRY</h3>
          <p>
            Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
            Aeneantos commodo
          </p>
        </div>
      </div>
    </div>
  );
}

export default Offer;
