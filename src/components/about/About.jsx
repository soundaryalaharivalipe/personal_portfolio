/* import React from 'react';
import './about.css';
import ME from '../../assets/about-me-pic.jpeg';
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { LiaAwardSolid } from "react-icons/lia";
import { GrCertificate } from "react-icons/gr";

const About = () => {
  return (
    <section id='about'>
      <h5> Get to know </h5>
      <h2> About me </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='' />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
          <MdOutlineCollectionsBookmark className='about__icon'/>
            <article className='about__card'>
              <h5> Experience</h5>
              <small> 2 years </small>
            </article>

            <article className='about__card'>
              <GrCertificate className='about__icon'/>
              <h5> Certifications </h5>
              <small> AWS Certified Developer </small>
            </article>

            <article className='about__card'>
              <LiaAwardSolid className='about__icon'/>
              <h5> Awards </h5>
              <ul className='award-list'>
                <li><small>Rockstar Rookie</small></li>
                <li><small>We Truly Appreciate</small></li>
                <li><small>Standout Performer</small></li>
              </ul>
            </article>
          </div>

          <p> Hello! I'm Soundarya Lahari Valipe, a passionate and goal-driven software engineer with a strong academic background and hands-on experience in the field. I am currently pursuing my Master’s in Computer Science from the University of Central Florida. I completed my Bachelor of Technology in Computer Science at PES Institute of Technology in Bengaluru, India. </p>
          <p> During my academic journey, I honed my skills in core areas such as Design and Analysis of Algorithms, Full Stack Development, and Machine Learning. In my professional journey, I served as an Associate Software Engineer at Bosch Global Software Technologies, Bengaluru, contributing significantly to full stack development. </p>
          <p> Beyond the theoretical, I've actively applied my knowledge in real-world scenarios, shaping a holistic understanding of the ever-evolving tech landscape. My passion for innovation and problem-solving fuels my drive to create impactful solutions that transcend theoretical concepts into tangible results. </p>
          <p> My GitHub portfolio reflects my commitment to innovation, showcasing projects that highlight my skills in web development, machine learning, and a keen eye for efficient, user-centric solutions. </p>
          <p>  Let's code the future together! 💻🚀 </p>

          <a href='#contact' className='btn btn-primary'> Let's Talk </a>
        </div>
      </div>
    </section>
  );
};

export default About;
 */

/* import React from 'react'
import './about.css'
import ME from '../../assets/about-me-pic.jpeg'
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { LiaAwardSolid } from "react-icons/lia";
import { GrCertificate } from "react-icons/gr";

const About = () => {
  return (
    <section id='about'>
    <h5> Get to know </h5>
    <h2> About me </h2>

    <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image' />


          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
            <MdOutlineCollectionsBookmark className='about__icon'/>
            <h5> Experience</h5>
            <small> 2 years </small>
            </article>

            <article className='about__card'>
            <GrCertificate className='about__icon'/>
            <h5> Certifications </h5>
            <small> AWS Certified Developer </small>
            </article>

            <article className='about__card'>
            <LiaAwardSolid className='about__icon'/>
            <h5> Awards </h5>
            <small> Rockstar Rookie </small>
            <br></br>
            <small> We Truly Appreciate </small>
            <small> Standout Performer </small>
            </article>

          </div>

          <p> Hello! I'm Soundarya Lahari Valipe, a passionate and goal driven software engineer with a strong academic background and hands-on experience in the field. I am currently pursuing my Master’s in Computer Science from the University of Central Florida. I completed my Bachelor of Technology in Computer Science at PES Institute of Technology in Bengaluru, India. </p>
          <p> During my academic journey, I honed my skills in core areas such as Design and Analysis of Algorithms, Full Stack Development, and Machine Learning. In my professional journey, I served as an Associate Software Engineer at Bosch Global Software Technologies, Bengaluru, contributing significantly to full stack development. </p>
          <p> Beyond the theoretical, I've actively applied my knowledge in real-world scenarios, shaping a holistic understanding of the ever-evolving tech landscape. My passion for innovation and problem-solving fuels my drive to create impactful solutions that transcend theoretical concepts into tangible results. </p>
          <p> My GitHub portfolio reflects my commitment to innovation, showcasing projects that highlight my skills in web development, machine learning, and a keen eye for efficient, user-centric solutions. </p>
          <p>  Let's code the future together! 💻🚀 </p>

          <a href='#contact' className='btn btn-primary'> Let's Talk </a>
        </div>


    </div>
    
    </section>
  )
}

export default About */

import React from 'react';
import './about.css';
import ME from '../../assets/about-me-pic.jpeg';
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { LiaAwardSolid } from "react-icons/lia";
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
              <MdOutlineCollectionsBookmark className='about__icon'/>
              <h5> Experience</h5>
              <small> 2 years </small>
            </article>

            <article className='about__card'>
              <GrCertificate className='about__icon'/>
              <h5> Certifications </h5>
              <small> AWS Certified Developer </small>
            </article>

            <article className='about__card'>
              <LiaAwardSolid className='about__icon'/>
              <h5> Awards </h5>
              <small> Rockstar Rookie </small>
              <br></br>
              <small> We Truly Appreciate </small>
              <small> Standout Performer </small>
            </article>
          </div>

          <p> Hello! I'm Soundarya Lahari Valipe, a passionate and goal-driven software engineer with a strong academic background and hands-on experience in the field. I am currently pursuing my Master’s in Computer Science from the University of Central Florida. I completed my Bachelor of Technology in Computer Science at PES Institute of Technology in Bengaluru, India. </p>
          <p> During my academic journey, I honed my skills in core areas such as Design and Analysis of Algorithms, Full Stack Development, and Machine Learning. In my professional journey, I served as an Associate Software Engineer at Bosch Global Software Technologies, Bengaluru, contributing significantly to full stack development. </p>
          <p> Beyond the theoretical, I've actively applied my knowledge in real-world scenarios, shaping a holistic understanding of the ever-evolving tech landscape. My passion for innovation and problem-solving fuels my drive to create impactful solutions that transcend theoretical concepts into tangible results. </p>
          <p> My GitHub portfolio reflects my commitment to innovation, showcasing projects that highlight my skills in web development, machine learning, and a keen eye for efficient, user-centric solutions. </p>
          <p>  Let's code the future together! 💻🚀 </p>

          <a href='#contact' className='btn btn-primary'> Let's Talk </a>
        </div>
      </div>
    </section>
  );
};

export default About;
