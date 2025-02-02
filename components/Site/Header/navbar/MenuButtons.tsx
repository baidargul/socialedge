import Button from "@/components/ui/Button/Button";
import React from "react";

type Props = {};

const MenuButtons = (props: Props) => {
  return (
    <div className="flex gap-4 items-start">
      <Button>Book Now</Button>
      <Button style="outlined">Sign In</Button>
    </div>
  );
};

export default MenuButtons;
