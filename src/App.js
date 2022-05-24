import Client from "./components/Client";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import HasilKarya from "./components/HasilKarya";
import Header from "./components/Header";
import Heroku from "./components/Heroku";
import Navigate from "./components/Navigate";
import Sidebar from "./components/Sidebar";
import Technology from "./components/Technology";

function App() {
  const setSidebar = () => {
    const one = document.querySelector('#one')
    const two = document.querySelector('#two')
    const three = document.querySelector('#three')
    const container = document.querySelector('#container')
    const sidebar = document.querySelector('#sidebar')
    one.classList.toggle('rotate-[35deg]')
    two.classList.toggle('opacity-0')
    three.classList.toggle('-rotate-[35deg]')
    container.classList.toggle('md:ml-60')
    sidebar.classList.toggle('-ml-60')

  }

  return (
    <>
      <div id="container" className="mx-auto md:ml-60 transition-all">
        <div className='p-4 bg-green-500 fixed top-0 right-0 left-0'>          
          <button onClick={setSidebar} className="absolute left-6 top-6 hidden md:inline">
            <div id="one" className="w-8 mb-[5px] border-2 border-black bg-black origin-left rotate-[35deg] transition delay-500"></div>
            <div id="two" className="w-8 mb-[5px] border-2 border-red-700 bg-red-700 opacity-0 transition delay-500"></div>
            <div id="three" className="w-8 mb-[5px] border-2 border-white bg-white origin-left -rotate-[35deg] transition delay-500"></div>
          </button>
          <Header />
        </div>
        <div id="sidebar" className="hidden md:block bg-red-50 border-r-2 border-red-700 fixed left-0 top-[72px] bottom-0 w-60 p-4 transition-all">
          <Sidebar />
        </div>
        <div className="mt-20 sm:mb-0">
          <Heroku />
        </div>
        <div className="bg-green-50 sm:mt-0 md:mt-4 p-3">
          <HasilKarya />
        </div>
        <div className="mt-4">
          <Technology />
        </div>
        <div className="mt-4">
          <Gallery />
        </div>
        <div className="bg-green-50 p-3 mt-4">
          <Contact />
        </div>
        <div className="bg-green-50 pt-2 mt-0 pb-16">
          <Client />
        </div>
        <div className='bg-white fixed bottom-0 right-0 left-0 border-t-2 border-t-green-500 md:hidden'>
          <Navigate />
        </div>
      </div>
    </>
  );
}

export default App;
