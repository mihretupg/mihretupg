import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./sections/About";
import Contact from "./sections/Contact";
import EducationTraining from "./sections/EducationTraining";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  return (
    <div className="min-h-screen bg-resume-paper text-resume-strong">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <EducationTraining />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
