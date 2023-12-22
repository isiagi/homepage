import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <div className="px-5 bg-[#121212] text-white flex justify-between min-h-40 items-center">
      <h1>Coffee</h1>

      <ul className="flex gap-5">
        <li>Home</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="flex gap-5">
        <FaFacebookF />
        <BsTwitterX />
      </div>
    </div>
  );
}

export default Footer;
