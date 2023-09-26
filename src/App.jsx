// import "./output.css";
import "./build.css";
import Home from "./page/Home";
import MobileNav from "./component/MobileNav";
import "@fontsource/andika";
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

        <a
          href="https://server.webpunagaya.com/pdf/portofolio.pdf"
          target="_blank"
          className="text-white text-xs hover:text-greenLight fixed top-2 right-2 border hover:border-greenLight rounded-md p-1  z-10"
        >
          <i className="bi-download"></i> pdf
        </a>

        <Home />
        <DesktopNav status={open ? "-ml-60" : null} />
        <MobileNav />
      </div>
    </>
  );
}

export default App;
