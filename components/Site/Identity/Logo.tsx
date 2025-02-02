import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link href="/">
      <div className="">
        <Image
          src="/identity/socialedge.png"
          alt="Logo"
          width={100}
          height={100}
          className="pointer-events-none select-none"
        />
      </div>
    </Link>
  );
};

export default Logo;
