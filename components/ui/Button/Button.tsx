"use client";
import React from "react";

type Props = {
  children?: React.ReactNode;
  style?: "filled" | "outlined";
  className?: string;
};

const Button = (props: Props) => {
  let style =
    "border-transparent bg-site-btnPrimary text-site-primary font-semibold hover:bg-[#c9f76f]";
  if (props.style === "filled") {
    style =
      "bg-site-btnPrimary border-transparent text-site-primary font-semibold hover:bg-[#c9f76f]";
  } else if (props.style === "outlined") {
    style = "border-current text-current hover:bg-white/10";
  }

  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-full border-2 px-6 py-3 text-sm transition-colors ${style} ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
