import { Dot } from "lucide-react";
import React from "react";

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export type MenuRowType = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const Row = (props: Props) => {
  return (
    <div className="flex justify-between items-center py-2 border-b border-zinc-300 group cursor-pointer hover:pl-2 hover:bg-gradient-to-r hover:from-amber-50 hover:to-transparent transition-all duration-200">
      <div>
        <div className="font-medium flex gap-1 items-center relative">
          <div className="absolute opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-[-4px] transition-all duration-200">
            <Dot size={20} />
          </div>
          <div className="group-hover:translate-x-[12px] translate-x-0 transition-all duration-200">
            {props.title}
          </div>
        </div>
        <div className="font-thin tracking-tight text-zinc-700">
          {props.description}
        </div>
      </div>
      <div>{props.icon}</div>
    </div>
  );
};

export default Row;
