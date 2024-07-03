// Importing components
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skill/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div
      style={{
        backgroundImage:
          "repeating-linear-gradient(127deg, #010429, #121f51, #1f105e, #130a3c, #1a214e, #120c51)",
      }}
      className="bg-slate-900 text-white w-full min-h-screen"
    >
      <div className="container-width">
        <div className="container flex flex-col justify-center items-center mx-auto">
          <>
            <Navbar />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
