import irf from "/img/irf.jpg";

const Hero = () => {
  return (
    <>
      <div id="hero" className="flex flex-wrap gap-4 justify-center md:mx-8">
        <div
          style={{ backgroundImage: `url(${irf})` }}
          className="w-60 h-60 mx-auto mb-4 rounded-full shadow-md shadow-white  hover:shadow-greenLight bg-cover"
        ></div>
        <div className="w-[95%] md:w-[65%] self-center">
          <div className="mx-auto text-center text-base md:text-2xl text-white p-2 mb-4">
            Hi, my name is Muhammad Irfan. I live in Indonesia at Makassar’s
            city. On the sidelines of my busy schedule, I also work on projects
            for making and developing frontend and backend website applications.
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
