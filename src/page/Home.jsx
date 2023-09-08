import Projects from "../component/Projects";
import Technologies from "../component/Technologies";
import Contacts from "../component/Contacts";
import Clients from "../component/Clients";
import Hero from "../component/Hero";
import Comments from "../component/Comments";

const Home = () => {
  return (
    <>
      <div id="home">
        <Hero />
        <Projects />
        <Technologies />
        <Comments />
        <Contacts />
        <Clients />
      </div>
    </>
  );
};

export default Home;
