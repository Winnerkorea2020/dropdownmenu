import React from "react";
import { BiBell } from "react-icons/bi";

const Alarm = () => {
  return (
    <button className="relative">
      <div className="absolute -top-2 -right-3 badge">99</div>
      <BiBell size={30} />
    </button>
  );
};

export default Alarm;
