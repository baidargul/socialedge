"use client";
import React, { useEffect, useState } from "react";
import Logo from "../Identity/Logo";
import MainMenu from "../Menu/MainMenu";
import MenuButtons from "./navbar/MenuButtons";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type Props = {};

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/our-work" },
  { label: "Why Us", href: "/why-us" },
  { label: "Resources", href: "/resources" },
  { label: "Pricing", href: "/pricing" },
  { label: "Enterprise", href: "/enterprise" },
];

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="menu-navbar fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div
          className={`relative flex items-center justify-between rounded-2xl px-6 py-4 border shadow-soft transition-all ${
            scrolled || isOpen
              ? "bg-slate-900/70 border-white/10 backdrop-blur-2xl"
              : "bg-slate-900/55 border-white/10 backdrop-blur-xl"
          }`}
        >
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-white/10 via-white/0 to-white/10"></div>
          <Logo />
          <div className="hidden lg:flex items-center gap-6 text-white">
            <MainMenu />
            <MenuButtons tone="light" />
          </div>
          <button
            className={`lg:hidden inline-flex items-center justify-center rounded-full border p-2 transition ${
              scrolled || isOpen
                ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
                : "border-white/30 bg-white/10 text-white hover:bg-white/20"
            }`}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[520px] pb-6" : "max-h-0"
          }`}
        >
          <div className="rounded-2xl bg-white text-site-primary shadow-soft p-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium hover:text-site-primary/80 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 grid grid-cols-1 gap-3">
              <Link
                href="/pricing"
                className="rounded-full bg-site-primary px-6 py-3 text-center text-white font-semibold hover:bg-site-primary/90 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Book a Strategy Call
              </Link>
              <Link
                href="/resources"
                className="rounded-full border border-site-primary px-6 py-3 text-center font-semibold text-site-primary hover:bg-site-primary/5 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Browse Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
