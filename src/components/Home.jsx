import React from 'react';
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='presentation-container'>
        <div className='presentation-text'>
          <h1 className="animate__animated animate__fadeInLeft">
            Programador <br />
            Full-Stack <span>👋🏻</span>
          </h1>
          <h4 className="animate__animated animate__fadeInLeft">Hola, soy Nahuel VIllaverde. Un apacionado programador full-stack Argentino.</h4>
          <div className='redes-home animate__animated animate__fadeInLeft'>
            <div className="image-container-redes">
              <a href="https://www.linkedin.com/in/nahuel-villaverde" target="_blank" rel="noopener noreferrer">
                <img className='red-linkedin-home' src="/LinkedIn (1).png" alt="Linkedin" />
                <span className="image-text">Linkedin</span>
              </a>
            </div>
            <div className="image-container-redes">
              <a href="https://github.com/Nahuel-Villaverde" target="_blank" rel="noopener noreferrer">
                <img className='red-github-home' src="/GitHub.png" alt="Github" />
                <span className="image-text">GitHub</span>
              </a>
            </div>
            <div className="image-container-redes">
              <a
                href="/Cv Nahuel Villaverde Actualizado.pdf"
                download="Curriculum_Nahuel_Villaverde.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className='red-curriculum-home' src="/resume (1).png" alt="Github" />
                <span className="image-text">Curriculum</span>
              </a>
            </div>
          </div>
        </div>
        <div className='big-image animate__animated animate__fadeInRight'>
          <img src="/Ellipse 1.png" alt="Github" />
        </div>
      </div>
      <div className='tech-tecnology animate__animated animate__fadeInLeft'>
        <h5>Tech Stack</h5>
        <div className='skills-container'>
          <div className="image-container">
            <img src="./javascript_icon_130900 1.png" alt="JavaScript Icon" class="icon-image" />
            <span className="image-text">JavaScript</span>
          </div>
          <div className="image-container">
            <img src="Vector.png" alt="JavaScript Icon" class="icon-image" />
            <span className="image-text">React</span>
          </div>
          <div className="image-container">
            <img src="mongodb_original_wordmark_logo_icon_146425 1.png" alt="JavaScript Icon" class="icon-image" />
            <span className="image-text">MongoDB</span>
          </div>
          <div className="image-container">
            <img src="nodejs_plain_logo_icon_146409 1.png" alt="JavaScript Icon" class="icon-image" />
            <span className="image-text">NodeJs</span>
          </div>
          <div className="image-container">
            <img src="icons8-express-js-500 1.png" alt="JavaScript Icon" class="icon-image" />
            <span className="image-text">ExpressJs</span>
          </div>
          <div className="image-container">
            <img src="figma_logo_icon_147289 1.png" alt="JavaScript Icon" class="icon-image" />
            <span className="image-text">Figma</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;