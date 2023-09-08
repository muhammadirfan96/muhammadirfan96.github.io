const Logo = (props) => {
  return (
    <>
      <div
        id={props.head}
        className={`w-[95%] ${props.tw_content_width} text-center mx-auto rounded-sm text-sm mb-4`}
      >
        <p className="text-white text-center p-2 text-base">{props.head}</p>
        <div
          className={`grid grid-flow-col gap-6 ${props.tw_position} overflow-x-auto w-full p-2`}
        >
          {props.state.map((prop) => (
            <a
              href={prop.url}
              target="_blank"
              key={prop.nama}
              style={{ backgroundImage: `url(${prop.logo})` }}
              className={`shadow-md shadow-white hover:shadow-greenLight rounded-md bg-cover relative w-16 h-16 md:w-24 md:h-24`}
            ></a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Logo;
