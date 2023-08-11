import irf from "/irf.png";
import Projects from "../component/Projects";
import Technologies from "../component/Technologies";
import Contacts from "../component/Contacts";
import Clients from "../component/Clients";

const datas = [
  { no: 1, name: "jimmy", email: "jimmy@email.com" },
  { no: 2, name: "jane", email: "jane@email.com" },
  { no: 3, name: "alex", email: "alex@email.com" },
];

const Home = () => {
  return (
    <>
      <div id="hero" className="flex flex-wrap gap-4 justify-center md:mx-8">
        <div
          style={{ backgroundImage: `url(${irf})` }}
          className="w-60 h-60 mx-auto mb-4 rounded-full shadow-md shadow-white  hover:shadow-greenLight bg-cover"
        ></div>
        <div className="w-[95%] md:w-[65%] self-center">
          <div className="mx-auto text-center shadow-md shadow-white  hover:shadow-greenLight rounded-md text-sm text-white p-2 mb-4">
            Hi, my name is Muhammad Irfan. I live in Indonesia at Makassar’s
            city. On the sidelines of my busy schedule, I also work on projects
            for making and developing frontend and backend website applications.
          </div>
        </div>
      </div>

      <Projects />
      <Technologies />

      <div
        id="try"
        className="w-[95%] md:w-[60%] lg:w-[40%] text-center mx-auto shadow-md shadow-white rounded-md text-sm mt-8 mb-4 pt-1 pb-4"
      >
        <p className="text-white text-center p-2 text-base">let's try</p>
        <div className="overflow-x-auto p-2 mx-2 mb-2">
          <table cellPadding="5" className="text-white w-full">
            <thead className="border-b-2 border-white">
              <tr>
                <th className="w-4">no</th>
                <th>name</th>
                <th>email</th>
              </tr>
            </thead>
            <tbody className="font-light">
              {datas.map((data) => (
                <tr
                  key={data.no}
                  className="border-b border-white hover:border-greenLight hover:text-greenLight"
                >
                  <td>{data.no}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          className="text-white hover:text-greenLight p-2 text-sm shadow-md shadow-white hover:shadow-greenLight rounded-md m-2"
          type="button"
        >
          export to xls
        </button>
        <button
          className="text-white hover:text-greenLight p-2 text-sm shadow-md shadow-white hover:shadow-greenLight rounded-md m-2"
          type="button"
        >
          export to pdf
        </button>
      </div>

      <Contacts />
      <Clients />
    </>
  );
};

export default Home;
