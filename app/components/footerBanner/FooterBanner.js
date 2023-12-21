import { SiCoffeescript } from "react-icons/si";

function FooterBanner() {
  return (
    <div className="bg-[url('/images/home1.jpg')] bg-center bg-[#353536] bg-blend-overlay min-h-[90vh] text-white flex justify-center">
      <div>
        <div>
          <SiCoffeescript className="text-xl text-white mx-auto" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterBanner;
