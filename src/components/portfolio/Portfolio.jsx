import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Employee Details Management System',
    github: 'https://github.com/soundaryalaharivalipe/Employee_details_management_system',
    demo: ''
  },
  {
    id: 2,
    image: IMG2,
    title: 'Subscription Box Management System',
    github: 'https://github.com/soundaryalaharivalipe/Subscription_box_management_system',
    demo: ''
  },
  {
    id: 3,
    image: IMG3,
    title: 'Resume Classification using Natural Language Processing',
    github: 'https://github.com/soundaryalaharivalipe/Resume_Classification_using_NLP',
    demo: ''
  },


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
