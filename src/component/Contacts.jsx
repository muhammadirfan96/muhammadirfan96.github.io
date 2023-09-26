import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";

const Contacts = () => {
  const data = [
    {
      logo: <BsWhatsapp />,
      url: "https://wa.me/+6282302173682?text=halo%20muhammad%20irfan,%20I%20have%20seen%20your%20profile",
    },
    {
      logo: <BsInstagram />,
      url: "https://www.instagram.com/muhammadirfan121314",
    },
    {
      logo: <BsFacebook />,
      url: "https://web.facebook.com/profile.php?id=100009498567639",
    },
  ];

  return (
    <>
      <div
        id="#contact"
        className="w-[95%] text-white text-center mx-auto rounded-sm text-sm mb-4"
      >
        <p className="text-center p-2 text-base">Contacts</p>
        <div className="flex justify-center gap-4">
          {data.map((prop, index) => (
            <a
              target="_blank"
              key={index}
              href={prop.url}
              className="shadow-md shadow-white hover:shadow-greenLight rounded-md p-4 text-4xl text-white hover:text-greenLight"
            >
              {prop.logo}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contacts;
