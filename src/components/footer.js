import React from 'react';
import './footer.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 >Annaparipooranam</h3>
        <p>Computer Science Engineering Student | Passionate About Software Development | Aspiring Data Scientist</p>
        <div className="social-media">
        <a href="https://www.linkedin.com/in/anna-paripooranam-p-941168259" target="_blank" rel="noreferrer" className="linkedin">
                <FaLinkedin size={35}/>
                </a>
                <a href="https://github.com/Poorani-1" target="_blank" rel="noreferrer" className="github">
                <FaGithub size={35}/>
                </a>
                <a href="https://www.instagram.com/_papa_ma_?igsh=MXBkazM1NGU0cWtxbw==" target="_blank" rel="noreferrer" className="instagram">
                <FaInstagram size={35}/>
                </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
