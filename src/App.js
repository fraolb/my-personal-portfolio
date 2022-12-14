import './App.css';
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Skills from "./components/skills/Skills"
import Experience from "./components/experience/Experience"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Services from './components/services/Services';

import ParticlesBackground from "./components/background/ParticleBackground"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles";
import { useCallback } from "react";


function App() {
  
  return (
    <div className="App">
      
      <Header />
      <Nav />
      <Skills />
      <About />
      <Experience />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
   
    </div>
  );
}

export default App;


{/* <Header />
      <Nav />
      <Skills />
      <About />
      <Experience />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer /> */}