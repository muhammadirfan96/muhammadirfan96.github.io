import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import HasilKarya from "./components/HasilKarya";
import Header from "./components/Header";
import Heroku from "./components/Heroku";
import Technology from "./components/Technology";

function App() {
  return (
    <>
      <div className="mx-auto">
        <div className='p-4 bg-green-500 fixed top-0 right-0 left-0'>          
          <Header />
        </div>
        <div className="grid justify-items-center sm:grid-cols-2 gap-4 mt-20">
          <Heroku />
        </div>
        <div className="bg-slate-50 p-3">
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
      </div>
    </>
  );
}

export default App;
