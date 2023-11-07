import Link from "next/link";
import React from "react";
import Search from "./SearchBar/Search";
import Alarm from "./Alarm/Alarm";
import NationaFlag from "./NationalFlag/NationaFlag";
import PrimaryButton from "./Button/PrimaryButton";
import Image from "next/image";
import Nav from "./Nav";

const Header = ({ menuItems }) => {
  return (
    <header className="fixed h-screen bg-white flex justify-between items-center xl:h-16 top-0 left-0 mx-auto  w-full padding-x text-sm border-b shadow">
      <Nav menuItems={menuItems} />
    </header>
  );
};

export default Header;
