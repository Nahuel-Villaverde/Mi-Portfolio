import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className='about-container' >
      <div className='about-text' >
        <h2 data-aos="fade-right" >Sobre mí</h2>
        <h4 data-aos="fade-right" >Programador Full-Stack comprometido con el aprendizaje</h4>
        <p data-aos="fade-right" >Comencé mi camino aprendiendo Diseño Ux/Ui, para luego adentrarme en la programación, hice 5 cursos en coderhouse en los cuales aprendí infinidad de herramientas.<br />Luego inicié ayudando a un programador con pequeñas tareas, mientras creaba numerosos proyectos para demostrar mis habilidades.<br />Trabajé en equipo e individualmente, tuve infinidad de problemas, pero con tiempo y dedicacion pude llevarme un aprendizaje de cada uno de ellos.</p>
      </div>
      <div className='about-end'>
        <h4 data-aos="fade-right" >Si estás interesado en conocer más sobre mí, puedes descargar mi CV:</h4>
        <a className='button-about'
          href="/Cv Nahuel Villaverde Actualizado.pdf"
          download="Curriculum_Nahuel_Villaverde.pdf"
          target="_blank"
          rel="noopener noreferrer" 
          data-aos="fade-right">
          Descargar CV
        </a>
      </div>
    </div>
  );
};

export default About;  // Asegúrate de que esté exportado por defecto
