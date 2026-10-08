import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link href="/">
      <div className="">
        <Image
          src="/identity/SocialEdge.png"
          alt="SocialEdge Creative"
          width={170}
          height={170}
          className="pointer-events-none -mr-4 select-none object-contain"
        />
      </div>
    </Link>
  );
};

export default Logo;
