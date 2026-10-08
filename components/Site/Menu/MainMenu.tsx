"use client";
import React, { useState } from "react";
import MenuItem from "./mainmenu/MenuItem";
import Services from "./mainmenu/Pages/Services";

type Props = {};

const MainMenu = (props: Props) => {
  const [currentMenu, setCurrentMenu] = useState<React.ReactNode | null>(null);

  const handleMenu = (menu: React.ReactNode | null) => {
    setCurrentMenu(menu);
  };

  return (
    <div
      className="relative p-2 select-none"
      onMouseLeave={() => handleMenu("")}
    >
      <div className="flex justify-center items-center text-nowrap gap-4 font-semibold select-none">
        <MenuItem title="Services" href="/services" setMenu={handleMenu}>
          <Services />
        </MenuItem>
        <MenuItem title="Our Work" href="/our-work" setMenu={handleMenu} />
        <MenuItem title="Why Us" href="/why-us" setMenu={handleMenu} />
        <MenuItem title="Resources" href="/resources" setMenu={handleMenu} />
        <MenuItem title="For Teams" href="/enterprise" setMenu={handleMenu} />
      </div>
      <div
        onMouseEnter={() => handleMenu(currentMenu)}
        className={`absolute top-10 left-1/2 -translate-x-1/2  ${
          currentMenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-all duration-300`}
      >
        {currentMenu}
      </div>
    </div>
  );
};

export default MainMenu;
