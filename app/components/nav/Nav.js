"use client";

import useOffSet from "@/app/hooks/useOffSet";

function Nav() {
  const [offSet] = useOffSet();

  return (
    <nav
      className={`${
        offSet < 50
          ? "fixed w-full min-h-[10vh] flex justify-between items-center px-5 font-semibold text-white"
          : "fixed z-10 bg-[#BE9C79] w-full min-h-[10vh] flex justify-between items-center px-5 font-semibold text-white"
      }`}
    >
      <h1 className="text-2xl font-semibold">Coffee</h1>

      <ul className="flex gap-5 font-semibold">
        <li>Home</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Nav;
