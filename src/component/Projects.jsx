import Card from "./Card";
import mysid from "/img/mysid.png";
import simokit from "/img/simokit.png";
import webpunagaya from "/img/webpunagaya.png";
import massekolah from "/img/massekolah.png";

const Projects = () => {
  const data = [
    { logo: mysid, nama: "mysid", url: "https://mysid.id" },
    { logo: simokit, nama: "simokit", url: "https://webpunagaya.com" },
    {
      logo: webpunagaya,
      nama: "web-punagaya",
      url: "https://webpunagaya.com/temp",
    },
    { logo: massekolah, nama: "mas-sekolah", url: "#" },
  ];

  return (
    <>
      <Card head="projects" tw="w-40 h-40" state={data} />
    </>
  );
};

export default Projects;
