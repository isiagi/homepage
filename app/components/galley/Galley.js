import Image from "next/image";
import React from "react";
import HeaderBanner from "../headerBanner/HeaderBanner";

function Galley() {
  return (
    <div>
      <HeaderBanner title={"OUR SWEET GALLERY"} />
      <div className="grid grid-cols-fluid gap-5">
        {[1, 2, 3, 5, 6].map((i) => (
          <div key={i} className="group relative">
            <div className="">
              <Image
                src={
                  "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTg5fHxjb2ZmZWUlMjBjdXAlMjBsZWZ0fGVufDB8fDB8fHww"
                }
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
            </div>
            <div className="absolute bottom-0 bg-[#000] bg-opacity-[0.5] w-full h-full opacity-0 group-hover:opacity-[1] flex items-center justify-center">
              <div className="text-white">
                <h1 className="text-2xl">Coffee Cup</h1>
                <p>love / hey</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galley;
