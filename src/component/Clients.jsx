import Logo from "./Logo";
import pln from "/pln.png";
import latompa from "/latompa.png";

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
