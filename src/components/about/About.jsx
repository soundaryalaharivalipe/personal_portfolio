import React from 'react';
import './about.css';
import ME from '../../assets/about-me-pic.jpeg';
//import { LiaAwardSolid } from "react-icons/lia";
import { GrCertificate } from "react-icons/gr";

const About = () => {
  return (
    <section id='about'>
      <h5> Get to know </h5>
      <h2> About me </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='Soundarya Lahari Valipe' />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">


            <article className='about__card'>
              <GrCertificate className='about__icon'/>
              <h5> Amazon Certification </h5>
              <small> <a href="https://www.credly.com/badges/e3f419f7-e7c6-4be9-8b3d-f31b7ef35057/public_url">AWS Certified Developer  </a></small>
            </article>

            <article className='about__card'>
              <GrCertificate className='about__icon'/>
              <h5> Microsoft Certification </h5>
              <small> <a href="#">Microsoft Certified: Azure Developer Associate</a></small>
            </article>
          
          </div>

          <p> Hello! I'm Soundarya Lahari Valipe, a passionate and goal-driven software engineer with a strong academic background and hands-on experience in the field. I am currently pursuing my Master’s in Computer Science from the University of Central Florida. I completed my Bachelor of Technology in Computer Science at PES Institute of Technology in Bengaluru, India. </p>
          <p> During my academic journey, I honed my skills in core areas such as Design and Analysis of Algorithms, Full Stack Development, and Machine Learning. In my professional journey, I served as an Associate Software Engineer at Bosch Global Software Technologies, Bengaluru, contributing significantly to full stack development. </p>
          <p> Beyond the theoretical, I've actively applied my knowledge in real-world scenarios, shaping a holistic understanding of the ever-evolving tech landscape. My passion for innovation and problem-solving fuels my drive to create impactful solutions that transcend theoretical concepts into tangible results. </p>
          <p> My GitHub portfolio reflects my commitment to innovation, showcasing projects that highlight my skills in web development, machine learning, and a keen eye for efficient, user-centric solutions. </p>
          <p> Let's code the future together! 💻🚀 </p>

          <a href='#contact' className='btn btn-primary'> Let's Talk </a>
        </div>
      </div>
    </section>
  );
};

export default About;
