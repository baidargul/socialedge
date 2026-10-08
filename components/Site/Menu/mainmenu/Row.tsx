import { Dot } from "lucide-react";
import React from "react";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  tone?: "light" | "dark";
  href?: string;
};

export type MenuRowType = {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
};

const Row = (props: Props) => {
  const tone = props.tone ?? "light";
  const border =
    tone === "dark" ? "border-white/10" : "border-zinc-300";
  const hover =
    tone === "dark"
      ? "hover:bg-white/10 hover:from-transparent hover:to-transparent"
      : "hover:bg-gradient-to-r hover:from-amber-50 hover:to-transparent";
  const desc = tone === "dark" ? "text-gray-200" : "text-zinc-700";

  return (
    <Link
      href={props.href ?? "/services"}
      className={`flex justify-between items-center py-2 border-b ${border} group cursor-pointer hover:pl-2 ${hover} transition-all duration-200`}
    >
      <div>
        <div className="font-medium flex gap-1 items-center relative">
          <div className="absolute opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-[-4px] transition-all duration-200">
            <Dot size={20} />
          </div>
          <div className="group-hover:translate-x-[12px] translate-x-0 transition-all duration-200">
            {props.title}
          </div>
        </div>
        <div className={`text-sm tracking-tight ${desc}`}>
          {props.description}
        </div>
      </div>
      <div>{props.icon}</div>
    </Link>
  );
};

export default Row;
