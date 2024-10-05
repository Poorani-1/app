import React from 'react'
import './about.css';

const About = () => {
  return (
    <div>
    <div className="head" id="aboutsection" style={{height: '150vh', backgroundColor: 'white'}}>
      <div className="content">
        <h1 className="name">About me</h1> <br/><br/>
        <p className="title">I'm Annaparipooranam <br/> Engineering Student | Full Stack Developer</p>
        <p className="description">
          I'm a passionate full-stack developer specializing in building exceptional websites and applications. <br/>
          I love transforming ideas into reality through clean code and intuitive user interfaces.
        </p>
      </div>
      </div>
      </div>
  );
};

export default About;