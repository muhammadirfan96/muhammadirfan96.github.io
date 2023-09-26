import Projects from "../component/Projects";
import Contacts from "../component/Contacts";
import Hero from "../component/Hero";
import Ability from "../component/Ability";

const Home = () => {
  return (
    <>
      <div id="home">
        <Hero />
        <Ability />
        <Projects />
        <Contacts />
      </div>
    </>
  );
};

export default Home;
