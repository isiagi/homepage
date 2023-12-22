import Image from "next/image";
import React from "react";
import HeaderBanner from "../headerBanner/HeaderBanner";

const galleyArray = [
  {
    id: 1,
    img: "/images/two.jpg",
    title: "Coffee Express",
  },
  {
    id: 2,
    img: "/images/three.jpg",
    title: "Coffee Cup",
  },
  {
    id: 3,
    img: "/images/six.jpg",
    title: "Expressior",
  },
  {
    id: 4,
    img: "/images/seven.jpg",
    title: "Expressior",
  },
  {
    id: 5,
    img: "/images/nine.jpg",
    title: "Expressior",
  },
  {
    id: 6,
    img: "/images/four.jpg",
    title: "Expressior",
  },
];

function Galley() {
  return (
    <div className="pb-14">
      <HeaderBanner title={"OUR SWEET GALLERY"} />
      <div className="grid grid-cols-fluid gap-5">
        {galleyArray.map(({ id, img, title }) => (
          <div key={id} className="group relative">
            <div className="">
              <Image
                src={`${img}`}
                alt={title}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="absolute bottom-0 bg-[#000] bg-opacity-[0.5] w-full h-full opacity-0 group-hover:opacity-[1] flex items-center justify-center">
              <div className="text-white">
                <h1 className="text-2xl">{title}</h1>
                <p>coffee / cup</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galley;
