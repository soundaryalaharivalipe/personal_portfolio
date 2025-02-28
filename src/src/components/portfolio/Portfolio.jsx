import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.jpg';
import IMG6 from '../../assets/portfolio6.jpg';


const data = [

  {
    id: 4,
    image: IMG4,
    title: 'Interview Preparation Application',
    github: 'https://github.com/soundaryalaharivalipe/Soundarya_InterviewPreparationApp',
    demo: 'https://soundarya-interviewpreparationapp.onrender.com'
  }, 
  
  {
    id: 1,
    image: IMG1,
    title: 'E-Commerce Application',
    github: 'https://github.com/soundaryalaharivalipe/E-Commerce-Application',
    demo: ''
  },

  {
    id: 5,
    image: IMG5,
    title: 'Netflix Clone',
    github: 'https://github.com/soundaryalaharivalipe/netflix-clone/tree/main',
    demo: ''
  },

  {
    id: 2,
    image: IMG2,
    title: 'Quiz Application',
    github: 'https://github.com/soundaryalaharivalipe/Quiz-Application',
    demo: ''
  },

  {
    id: 6,
    image: IMG6,
    title: 'Spotify Clone',
    github: 'https://github.com/soundaryalaharivalipe/spotify-clone',
    demo: ''
  },

  {
    id: 3,
    image: IMG3,
    title: 'Resume Classification using Natural Language Processing',
    github: 'https://github.com/soundaryalaharivalipe/Resume_Classification_using_NLP',
    demo: ''
  }

];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Projects</h5>
      <h2>Portfolio</h2> 

      <div className='container portfolio__container'>
        {data.map(({ id, image, title, github, demo }) => (
          <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live Demo</a>
            </div> 
          </article>
        ))}
      </div> 
    </section>
  );
};

export default Portfolio;
