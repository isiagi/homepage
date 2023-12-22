import React from "react";
import HeaderBanner from "../headerBanner/HeaderBanner";
import Image from "next/image";

const imgArray = [
  {
    id: 1,
    img: "/images/four.jpg",
    title: "PREP TECHNIQUES",
  },
  {
    id: 2,
    img: "/images/five.jpg",
    title: "EAST PRESS",
  },
  {
    id: 3,
    img: "/images/eight.jpg",
    title: "WEST IBRIK",
  },
];

function Blogs() {
  return (
    <div className="pb-20 bg-[url('/images/one.jpg')] px-5">
      <HeaderBanner title={"THE COFFEE HERALD"} />

      <div className="grid grid-cols-fluid gap-5">
        {imgArray.map(({ id, img, title }) => (
          <div key={id}>
            <Image
              src={img}
              alt={"coffee"}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
              }}
            />

            <h2>{title}</h2>

            <h3 className="text-slate-600">
              Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel augue.
              Curabitur ullamcorper ultricies nisi, nam eget dui. Etiam rhoncus
              maecenas tempus,
            </h3>
            <p className="hover:text-[#BE9C79] hover:pl-2">- Learn More</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
