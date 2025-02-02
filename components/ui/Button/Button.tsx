"use client";
import React from "react";

type Props = {
  children?: React.ReactNode;
  style?: "filled" | "outlined";
  className?: string;
};

const Button = (props: Props) => {
  let style =
    "border-transparent bg-site-btnPrimary text-site-primary font-semibold";
  if (props.style === "filled") {
    style =
      "bg-site-btnPrimary border-transparent text-site-primary font-semibold";
  } else if (props.style === "outlined") {
    style = "border-zinc-100";
  }

  return (
    <button
      className={`rounded-full p-4 px-6 border-2 ${style} ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
