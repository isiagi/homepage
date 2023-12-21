import React from "react";

function Nav() {
  return (
    <nav className="fixed w-full min-h-[10vh] flex justify-between items-center px-5 font-semibold text-white">
      <h1>Coffee</h1>

      <ul className="flex gap-5">
        <li>Home</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Nav;
