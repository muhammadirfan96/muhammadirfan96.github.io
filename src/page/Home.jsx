import Projects from "../component/Projects";
import Technologies from "../component/Technologies";
import Contacts from "../component/Contacts";
import Clients from "../component/Clients";
import Try from "../component/Try";
import Hero from "../component/Hero";

const Home = () => {
  return (
    <>
      <div id="home">
        <Hero />
        <Projects />
        <Technologies />
        <Try />
        <Contacts />
        <Clients />
      </div>
    </>
  );
};

export default Home;
