import { SiCoffeescript } from "react-icons/si";

function FooterBanner() {
  return (
    <div className="bg-[url('/images/home1.jpg')] bg-center bg-[#353536] bg-blend-overlay min-h-[90vh] text-white flex justify-center items-center">
      <div className="text-center">
        <div>
          <SiCoffeescript className="text-4xl text-white mx-auto" />
          <p className="max-w-[400px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
        </div>
        <div className="py-7">
          <h2 className="text-2xl">Store</h2>
          <p>12324, kampala Uganda</p>
          <p>12324, kampala Uganda</p>
        </div>
        <div className="flex justify-center">
          <input
            className="border-[1px] bg-transparent outline-none p-3"
            type="text"
            placeholder="Your email address"
          />
          <button className="bg-white text-black px-3">Send</button>
        </div>
      </div>
    </div>
  );
}

export default FooterBanner;
