import Logo from "./Logo";
import pln from "/img/pln.png";
import latompa from "/img/latompa.png";

const Clients = () => {
  const data = [
    { logo: pln, nama: "PLN UPK Punagaya", url: "#" },
    { logo: latompa, nama: "Desa Latompa", url: "#" },
  ];

  return (
    <>
      <Logo head="clients" tw="justify-center" state={data} />
    </>
  );
};

export default Clients;
