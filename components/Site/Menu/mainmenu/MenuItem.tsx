"use client";
import React, { useState } from "react";
import { ChevronDown, Dot } from "lucide-react";
import Link from "next/link";

type Props = {
  title: string;
  href?: string;
  setMenu?: (menu: React.ReactNode | null) => void;
  children?: React.ReactNode | null;
};

const MenuItem = (props: Props) => {
  const handledToggleMenu = (value: string) => {
    if (props.setMenu) {
      props.setMenu(props.children ? props.children : null);
    }
  };

  return (
    <div
      className="relative flex justify-center items-center"
      onMouseEnter={() => handledToggleMenu(props.title)}
    >
      {props.href ? (
        <Link href={props.href} className="cursor-pointer flex items-center group">
          <div className="group-hover:opacity-100 group-hover:-translate-x-[1px] opacity-0 transition-all duration-300 translate-x-2">
            <Dot size={24} />
          </div>
          <div className="transition-all duration-300 group-hover:translate-x-[2px] translate-x-0 flex items-center gap-1">
            {props.title ? props.title : "Menu"}
            {props.children && (
              <ChevronDown
                size={14}
                className="group-hover:rotate-180 transition-all duration-300"
              />
            )}
          </div>
        </Link>
      ) : (
        <div className="cursor-pointer flex items-center group">
          <div className="group-hover:opacity-100 group-hover:-translate-x-[1px] opacity-0 transition-all duration-300 translate-x-2">
            <Dot size={24} />
          </div>
          <div className="transition-all duration-300 group-hover:translate-x-[2px] translate-x-0 flex items-center gap-1">
            {props.title ? props.title : "Menu"}
            <ChevronDown
              size={14}
              className="group-hover:rotate-180 transition-all duration-300"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
