import {
  BsMotherboard,
  BsWindowDock,
  BsHouse,
  BsTelephone,
} from "react-icons/bs";

const DesktopNav = (props) => {
  const Scroll = () => {
    setTimeout(() => {
      window.scrollBy(0, -72);
    }, 1000);
  };

  const data = [
    {
      icon: <BsHouse className="mr-2 inline-block mb-1" />,
      url: "#home",
      nama: "home",
    },
    {
      icon: <BsMotherboard className="mr-2 inline-block mb-1" />,
      url: "#ability",
      nama: "ability",
    },
    {
      icon: <BsWindowDock className="mr-2 inline-block mb-1" />,
      url: "#project",
      nama: "project",
    },
    {
      icon: <BsTelephone className="mr-2 inline-block mb-1" />,
      url: "#contact",
      nama: "contact",
    },
  ];

  return (
    <>
      <div>
        <div
          className={`overflow-y-auto hidden md:block bg-green-950 border-r-2 border-white fixed left-0 top-[60px] bottom-0 w-60 p-4 transition-all ${props.status}`}
        >
          {data.map((prop, index) => (
            <a
              key={index}
              onClick={Scroll}
              href={prop.url}
              className="flex rounded-md shadow-md shadow-white hover:shadow-greenLight text-white hover:text-greenLight mb-4 w-full h-8 p-2"
            >
              <p className="text-lg self-center ml-2">
                {prop.icon} {prop.nama}
              </p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default DesktopNav;
