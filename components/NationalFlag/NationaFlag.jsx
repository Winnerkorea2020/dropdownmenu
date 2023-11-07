import Image from "next/image";
import React from "react";
import { BiWorld } from "react-icons/bi";

const NationaFlag = () => {
  return (
    <button>
      <BiWorld size={30} />
      <div className="hidden">
        <Image src={`/`} width={20} height={20} alt="Flag" />
      </div>
    </button>
  );
};

export default NationaFlag;
