import Client from "./components/Client";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import HasilKarya from "./components/HasilKarya";
import Header from "./components/Header";
import Heroku from "./components/Heroku";
import Navigate from "./components/Navigate";
import Technology from "./components/Technology";

function App() {
  return (
    <>
      <div className="mx-auto mb-4">
        <div className='p-4 bg-green-500 fixed top-0 right-0 left-0'>          
          <Header />
        </div>
        <div className="mt-20 sm:mb-0">
          <Heroku />
        </div>
        <div className="bg-slate-50 sm:mt-0 md:mt-4 p-3">
          <HasilKarya />
        </div>
        <div className="mt-4">
          <Technology />
        </div>
        <div className="mt-4">
          <Gallery />
        </div>
        <div className="bg-slate-50 p-3 mt-4">
          <Contact />
        </div>
        <div className="bg-slate-50 pt-2 mt-0 pb-16">
          <Client />
        </div>
        <div className='bg-white fixed bottom-0 right-0 left-0 border-t-2 border-t-green-500'>
          <Navigate />
        </div>
      </div>
    </>
  );
}

export default App;
