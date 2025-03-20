import "./about.css";
import React from "react";
import { Helmet } from "react-helmet";



const About = () => {
  return (
    <div className="a">
     
      <div className="a-right">
        <h2 className="a-title">
        <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Modak&display=swap"
          rel="stylesheet"
        />
      </Helmet>
          About me</h2>
        <p className="a-sub">
        I love designing and creating projects, ideas, and dreams.<br/>
        The most powerful thing is bringing them to life through my hands.            
        
        </p>
        <p className="a-desc">
        I consider myself a self-taught person.
        I enjoy learning new things and challenging myself.<br/> Exploring different aspects of coding and programming has given me the opportunity to discover more about myself.<br/>
        Throughout my journey, I’ve been fascinated by the power of creating something unique using only my computer.

        <br/>I have attended various courses and training programs, covering the MERN stack, Python, and UI/UX. <br/>These experiences have given me a broad vision and valuable skills in product creation, focusing on both the technical side and user needs.<br/>

        I still have a lot to learn, but I believe perseverance and a hunger for knowledge are my greatest strengths.
         
        </p>
        
  
      </div>
      </div>
  );
};

export default About;
