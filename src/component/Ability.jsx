import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
const Ability = () => {
  return (
    <>
      <div
        id="ability"
        className="w-[95%] text-white text-center mx-auto rounded-sm text-sm mb-4"
      >
        <p className="text-center p-2 text-base">Ability</p>
        <div className="flex justify-center gap-3 md:gap-6">
          <div className="shadow-md shadow-white hover:shadow-greenLight rounded-md p-2">
            <SiMongodb className="text-white hover:text-greenLight text-6xl md:text-8xl" />
          </div>
          <div className="shadow-md shadow-white hover:shadow-greenLight rounded-md p-2">
            <SiExpress className="text-white hover:text-greenLight text-6xl md:text-8xl" />
          </div>
          <div className="shadow-md shadow-white hover:shadow-greenLight rounded-md p-2">
            <SiReact className="text-white hover:text-greenLight text-6xl md:text-8xl" />
          </div>
          <div className="shadow-md shadow-white hover:shadow-greenLight rounded-md p-2">
            <SiNodedotjs className="text-white hover:text-greenLight text-6xl md:text-8xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Ability;
