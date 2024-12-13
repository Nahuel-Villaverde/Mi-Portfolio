import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-icons">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <img className='red-contact' src="/LinkedIn (1).png" alt="Linkedin imagen" />
          Linkedin
        </a>
        <a href="https://github.com/Nahuel-Villaverde" target="_blank" rel="noopener noreferrer">
          <img className='red-contact' src="/GitHub.png" alt="Github imagen" />
          GitHub
        </a>
        <a href="mailto:nahuelvillaverdeoficial@gmail.com">
          <img className='red-contact' src="/correo 1.png" alt="Gmail imagen" />
          Gmail
        </a>
      </div>
      <a href="https://www.linkedin.com/in/nahuel-villaverde" target="_blank" rel="noopener noreferrer" className="contact-title-container">
        <h2 className="contact-title">CONTACTAME</h2>
        <span>🡵</span>
      </a>


    </section>
  );
};

export default Contact;