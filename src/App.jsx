import "./output.css";
import Home from "./page/Home";
import MobileNav from "./component/MobileNav";
import "@fontsource/andika"; // Defaults to weight 400
import "@fontsource/andika/400.css"; // Specify weight
import "@fontsource/andika/400-italic.css"; // Specify weight and style
import DesktopNav from "./component/DesktopNav";
import { useState } from "react";

function App() {
  const [open, close] = useState(false);
  const handleToggle = () => {
    close(!open);
  };

  return (
    <>
      <div
        className={`bg-green-950 relative pt-20 pb-14 font-andika ${
          open ? null : "md:ml-60"
        }`}
      >
        <div className="fixed top-0 right-0 left-0 border-b-2 border-white bg-green-950 p-4 z-10">
          <button
            onClick={handleToggle}
            className="absolute left-5 top-5 hidden md:inline"
          >
            <div
              className={`${
                open ? "rotate-[35deg]" : null
              } w-8 mb-[5px] border-2 rounded-sm border-greenLight bg-greenLight origin-left transition delay-500`}
            ></div>
            <div
              className={`${
                open ? "opacity-0" : null
              } w-8 mb-[5px] border-2 rounded-sm border-greenLight bg-greenLight transition delay-500`}
            ></div>
            <div
              className={`${
                open ? "-rotate-[35deg]" : null
              } w-8 mb-[5px] border-2 rounded-sm border-white bg-white origin-left transition delay-500`}
            ></div>
          </button>
          <p className="text-center text-white text-xl font-bold">
            i'm ready to work with you
          </p>
        </div>

        <Home />
        <DesktopNav status={open ? "-ml-60" : null} />
        <MobileNav />
      </div>
    </>
  );
}

export default App;
