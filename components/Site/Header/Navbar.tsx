"use client";
import React, { useEffect } from "react";
import Logo from "../Identity/Logo";
import MainMenu from "../Menu/MainMenu";
import MenuButtons from "./navbar/MenuButtons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type Props = {};

const Navbar = (props: Props) => {
  useEffect(() => {
    gsap.to(".menu-navbar", {
      scrollTrigger: {
        trigger: ".menu-navbar",
        markers: false,
        start: "10px top",
        end: () => `+=${document.documentElement.scrollHeight}`,
        pin: true,
        pinSpacing: false,
        toggleActions: "play none none reverse",
      },
      backgroundColor: "white",
      color: "black",
      padding: "20px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    });
  }, []);

  return (
    <div className="menu-navbar flex justify-center items-center gap-4 z-50 absolute top-0 text-white left-0 w-full">
      <div>
        <Logo />
      </div>
      <div>
        <MainMenu />
      </div>
      <div>
        <MenuButtons />
      </div>
    </div>
  );
};

export default Navbar;
