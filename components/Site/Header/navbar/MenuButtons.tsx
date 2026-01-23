import Button from "@/components/ui/Button/Button";
import React from "react";
import Link from "next/link";

type Props = {
  tone?: "light" | "dark";
};

const MenuButtons = ({ tone = "light" }: Props) => {
  const outlineClasses =
    tone === "light"
      ? "border-white/70 text-white hover:bg-white/10"
      : "border-slate-200 text-slate-900 hover:bg-slate-100";

  return (
    <div className="flex gap-3 items-start">
      <Link href="/pricing">
        <Button className="px-5 py-2 text-sm" style="filled">
          Book a Call
        </Button>
      </Link>
      <Link href="/resources">
        <Button
          className={`px-5 py-2 text-sm ${outlineClasses}`}
          style="outlined"
        >
          View Resources
        </Button>
      </Link>
    </div>
  );
};

export default MenuButtons;
