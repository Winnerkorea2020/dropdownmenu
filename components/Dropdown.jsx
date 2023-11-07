import React from "react";

const Dropdown = () => {
  return (
    <ul>
      {item.submenu.map((item, index) => {
        <li key={index} className="py-2.5 px-2 w-full">
          <button className="w-full ">
            <div className="flex justify-between items-center ">
              <div>{item.title}</div>
              <div>하단</div>
            </div>
          </button>
        </li>;
      })}
    </ul>
  );
};

export default Dropdown;
