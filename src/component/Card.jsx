const Card = (props) => {
  return (
    <>
      <div
        id={props.head}
        className="w-[95%] text-white text-center mx-auto rounded-sm text-sm mb-4"
      >
        <p className="text-center p-2 text-base">{props.head}</p>
        <div className="flex gap-4 justify-start overflow-x-auto w-full p-2">
          {props.state.map((prop, index) => (
            <div
              key={index}
              className="flex gap-2 w-[530px] shadow-md shadow-white hover:shadow-greenLight rounded-md bg-cover relative p-3"
            >
              <div className="border border-greenLight rounded-md relative w-36 h-36">
                <img
                  className="w-full h-full"
                  src={prop.logo}
                  alt={prop.logo}
                />
              </div>
              <div className="w-[400px] relative">
                <div className="flex justify-between border-b mb-2">
                  <p>{prop.nama}</p>
                  <a href={prop.url} className="mx-2 hover:text-greenLight">
                    <i className="bi-arrow-right-circle"></i>
                  </a>
                </div>
                <p className="italic text-left text-xs">{prop.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
