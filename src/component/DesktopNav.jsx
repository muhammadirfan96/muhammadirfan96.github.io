import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import ListMenu from "./data/ListMenu";

const DesktopNav = (props) => {
  const Scroll = () => {
    setTimeout(() => {
      window.scrollBy(0, -72);
    }, 1000);
  };
  return (
    <>
      <div>
        <div
          className={`overflow-y-auto hidden md:block bg-green-950 border-r-2 border-white fixed left-0 top-[60px] bottom-0 w-60 p-4 transition-all ${props.status}`}
        >
          {ListMenu.map((menu) => (
            <a
              onClick={Scroll}
              key={menu.url}
              href={menu.url}
              className="flex rounded-md shadow-md shadow-white hover:shadow-greenLight text-white hover:text-greenLight mb-4 w-full h-8 p-2"
            >
              <p className="text-lg inline self-center ml-2">
                <i className={`${menu.icon} mr-2 text-xl`}></i>
                {menu.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default DesktopNav;
