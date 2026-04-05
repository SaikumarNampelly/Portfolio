import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import MainLayout from "../Layout/MainLayout";
import Education from "../components/Education";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <About/>
      <Skills />
      <Projects />
      <Education/>
      <Contact />
    </MainLayout>
  );
};

export default Home;