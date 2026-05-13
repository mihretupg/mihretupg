import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./sections/About";
import Contact from "./sections/Contact";
import EducationTraining from "./sections/EducationTraining";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import LanguagesSection from "./sections/LanguagesSection";
import Skills from "./sections/Skills";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <EducationTraining />
        <LanguagesSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
