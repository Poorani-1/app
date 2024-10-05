import React from "react";
import "./home.css"; 
import image from '../components/images/poorani.jpg'

const Home = () => {
  return ( 
    <div>
    <div className="home" id="homesection" style={{height: '150vh', backgroundColor: '#DFEBF6'}}>
      <div className="na">
        <h1 className="hello">Hi, I'm</h1>
        <p className="Poorani">Annaparipooranam</p>
        <img src={image} alt="profile" className="img"/>
      </div>
      <p className="slon">Passionate full-stack developer </p>
    </div>
    </div>
  );
};

export default Home;
