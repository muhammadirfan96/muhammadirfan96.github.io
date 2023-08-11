const Card = (props) => {
  return (
    <>
      <div
        id={props.head}
        className="w-[95%] text-center mx-auto rounded-sm text-sm mb-4"
      >
        <p className="text-white text-center p-2 text-base">{props.head}</p>
        <div className="grid grid-flow-col md:justify-center gap-6 overflow-x-auto w-full p-2">
          {props.state.map((prop) => (
            <div
              key={prop.nama}
              style={{ backgroundImage: `url(${prop.logo})` }}
              className={`shadow-md shadow-white hover:shadow-greenLight rounded-md bg-cover relative ${props.tw}`}
            >
              <a
                className="bg-white p-1 text-green-950 font-bold rounded-b-md opacity-60 absolute right-0 left-0 bottom-0"
                href={prop.url}
                target="_blank"
              >
                {prop.nama}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
