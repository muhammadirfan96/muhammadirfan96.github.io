import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BsGlobe, BsGithub, BsYoutube } from "react-icons/bs";

const Projects = () => {
  const data = [
    {
      logo: (
        <AiOutlineAppstoreAdd
          className="text-8xl text-center inline-block"
          style={{ lineHeight: "144px" }}
        />
      ),
      nama: "mysid",
      url_web: "https://mysid.id",
      url_github: "https://github.com/muhammadirfan96/mysid-fullstack",
      url_youtube: "",
      desc: "This application was built using codeigniter 4 and for styling using tailwindcss v3. View interactions that implement asynchronous JavaScript methods and Jason Web Token authentication. The application used by the Muna Regency Government, Latompa Village, has PDF-based letter creation features, a news portal, data management for residents receiving social assistance, a Village Profile Website, and others.",
    },
    {
      logo: (
        <AiOutlineAppstoreAdd
          className="text-8xl text-center inline-block"
          style={{ lineHeight: "144px" }}
        />
      ),
      nama: "simokit",
      url_web: "https://webpunagaya.com",
      url_github: "https://github.com/muhammadirfan96/simokit-fullstack",
      url_youtube: "",
      desc: "This is an application built using CodeIgniter 4 and for styling using Bootstrap V5. Application used by PT. PLN (Persero) UPK PUNAGAYA has features for creating various PDF-based reports, daily routine activity schedules, KPI monitoring, equipment IK SOPs and others.",
    },
  ];

  return (
    <>
      <div
        id="project"
        className="w-[95%] text-white text-center mx-auto rounded-sm text-sm mb-4"
      >
        <p className="text-center p-2 text-base">Projects</p>
        <div className="flex flex-wrap gap-4 justify-evenly w-full p-2">
          {data.map((prop, index) => (
            <div
              key={index}
              className="w-full md:w-[30%] lg:w-[45%] shadow-md shadow-white hover:shadow-greenLight rounded-md relative p-3"
            >
              <div className="border-b mb-2 text-right">
                <p>{prop.nama}</p>
              </div>
              <div className="flex gap-3">
                <div className="text-2xl">
                  <a
                    href={prop.url_web}
                    target="_blank"
                    className=" hover:text-greenLight mb-3 block"
                  >
                    <BsGlobe />
                  </a>
                  <a
                    href={prop.url_github}
                    target="_blank"
                    className=" hover:text-greenLight mb-3 block"
                  >
                    <BsGithub />
                  </a>
                  <a
                    href={prop.url_youtube}
                    target="_blank"
                    className=" hover:text-greenLight mb-3 block"
                  >
                    <BsYoutube />
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

export default Projects;
