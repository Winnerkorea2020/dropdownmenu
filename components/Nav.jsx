import Image from "next/image";
import Link from "next/link";
import React from "react";
import Dropdown from "./Dropdown";

const Nav = ({ menuItems }) => {
  return (
    <nav className="relative xl:static h-full xl:flex xl:items-center">
      <Link href={`/`} className="pr-2 flex items-center">
        <Image src="/csi_play_logo.png" width={35} height={35} />
        <span className="px-2.5 tracking-tighter font-medium">CSI-Play</span>
      </Link>

      <ul className="fixed top-0 px-5 py-2 left-0 w-full bg-red-200 z-50 xl:flex flex-col xl:justify-between xl:items-center xl:gap-5 font-semibold h-full">
        {menuItems.map((item, index) => {
          return (
            <li key={index} className="py-2.5 px-2 w-full">
              {item.submenu ? (
                <>
                  <button className="w-full">
                    <div className="flex justify-between items-center ">
                      <div>{item.title}</div>
                      <div>하단</div>
                    </div>
                  </button>
                  <Dropdown submenu={submenu} />
                </>
              ) : (
                <Link href={item.url}>{item.title}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
