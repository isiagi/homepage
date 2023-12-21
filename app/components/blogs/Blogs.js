import React from "react";
import HeaderBanner from "../headerBanner/HeaderBanner";
import Image from "next/image";

function Blogs() {
  return (
    <div className="pb-20 bg-[url('/images/one.jpg')] px-5">
      <HeaderBanner title={"THE COFFEE HERALD"} />

      <div className="grid grid-cols-fluid gap-5">
        <div>
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

          <h3>
            Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel augue.
            Curabitur ullamcorper ultricies nisi, nam eget dui. Etiam rhoncus
            maecenas tempus,
          </h3>
          <p className="hover:text-[#BE9C79] hover:pl-2">- Learn More</p>
        </div>

        <div>
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

          <h3>
            Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel augue.
            Curabitur ullamcorper ultricies nisi, nam eget dui. Etiam rhoncus
            maecenas tempus,
          </h3>
          <p>- Learn More</p>
        </div>

        <div>
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

          <h3>
            Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel augue.
            Curabitur ullamcorper ultricies nisi, nam eget dui. Etiam rhoncus
            maecenas tempus,
          </h3>
          <p>- Learn More</p>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
