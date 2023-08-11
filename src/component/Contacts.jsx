import Logo from "./Logo";
import wa from "/wa.png";
import ig from "/ig.png";
import fb from "/fb.png";
import github from "/github.png";

const Contacts = () => {
  const data = [
    {
      logo: wa,
      nama: "WhatsApp",
      url: "https://wa.me/+6282302173682?text=halo%20muhammad%20irfan,%20I%20have%20seen%20your%20profile",
    },
    {
      logo: ig,
      nama: "Instagram",
      url: "https://www.instagram.com/muhammadirfan121314",
    },
    {
      logo: fb,
      nama: "Facebook",
      url: "https://web.facebook.com/profile.php?id=100009498567639",
    },
    { logo: github, nama: "Github", url: "https://github.com/muhammadirfan96" },
  ];

  return (
    <>
      <Logo head="contacts" tw="justify-center" state={data} />
    </>
  );
};

export default Contacts;
