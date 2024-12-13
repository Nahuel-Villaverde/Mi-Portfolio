import React, { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="projects"><Projects /></div>
      <div id="about"><About /></div>
      <div id="contact"><Contact /></div>
    </>
  );
}

export default App;
