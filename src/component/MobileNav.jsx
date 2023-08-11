import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import ListMenu from "./data/ListMenu";

const MobileNav = () => {
  const [open, close] = useState(false);
  const handleToggle = () => {
    close(!open);
  };

  const Scroll = () => {
    setTimeout(() => {
      window.scrollBy(0, -72);
    }, 1000);
  };

  return (
    <>
      <div
        className={`fixed bottom-0 right-0 left-0 grid grid-flow-col gap-4 justify-center bg-green-950 p-2 z-10 border-t-2 border-white text-white md:hidden ${
          open ? "-mb-14" : null
        }`}
      >
        <button
          onClick={handleToggle}
          className="absolute right-0 -top-8 bg-white w-8 h-8 p-1 rounded-tl-lg"
          type="button"
        >
          <span
            className={`border-2 rounded-sm border-greenLight bg-greenLight font-extrabold inline-block rotate-45 mr-1 transition delay-500 h-4 ${
              open ? "translate-x-2" : null
            }`}
          ></span>
          <span
            className={`border-2 rounded-sm border-green-950 bg-green-950 font-extrabold inline-block -rotate-45 transition delay-500 h-4 ${
              open ? "-translate-x-2" : null
            }`}
          ></span>
        </button>

        {ListMenu.map((menu) => (
          <a
            onClick={Scroll}
            key={menu.url}
            href={menu.url}
            className="p-2 w-10 h-10 text-center rounded-md shadow-md shadow-white hover:shadow-greenLight hover:text-greenLight"
          >
            <i className={menu.icon}></i>
          </a>
        ))}
      </div>
    </>
  );
};

export default MobileNav;
