import React from 'react'
import './services.css'
import { FaCheck } from "react-icons/fa6";

const Services = () => {
  return (
    <section id='services'>

      <h5>What I Offer</h5>
      <h2> Services </h2>

      <div className="container services__container">
      {/* Start of FrontEnd */}
        <article className="service">
          <div className="service__head">
            <h3> UI/UX Design</h3>
          </div>

          <ul className='service__list'>
          <li>
          <FaCheck className='service__list-icon'/>
          <p>I am experienced in Front End </p>
          </li>

          <li>
          <FaCheck className='service__list-icon'/>
          <p>I am experienced in Front End </p>
          </li>

          <li>
          <FaCheck className='service__list-icon'/>
          <p>I am experienced in Front End </p>
          </li>

          <li>
          <FaCheck className='service__list-icon'/>
          <p>I am experienced in Front End </p>
          </li>

          <li>
          <FaCheck className='service__list-icon'/>
          <p>I am experienced in Front End </p>
          </li>

          <li>
          <FaCheck className='service__list-icon'/>
          <p>I am experienced in Front End </p>
          </li>

          </ul>
        </article>
        {/* End of UI/UX */}
        {/* Start of backend */}
        <article className="service">
          <div className="service__head">
            <h3> Backend Development </h3>
          </div>

          <ul className='service__list'>
          <li>
          <FaCheck className='service__list-icon'/>
          <p>I am experienced in Front End </p>
          </li>

          <li>
          <FaCheck className='service__list-icon'/>
          <p>I am experienced in Front End </p>
          </li>

          <li>
          <FaCheck className='service__list-icon'/>
          <p>I am experienced in Front End </p>
          </li>

          <li>
          <FaCheck className='service__list-icon'/>
          <p>I am experienced in Front End </p>
          </li>

          <li>
          <FaCheck className='service__list-icon'/>
          <p>I am experienced in Front End </p>
          </li>

          <li>
          <FaCheck className='service__list-icon'/>
          <p>I am experienced in Front End </p>
          </li>

          </ul>
        </article>
        {/* End of backend */}

        {/* Start of ML */}
        <article className="service">
          <div className="service__head">
            <h3> ML </h3>
          </div>

          <ul className='service__list'>
          <li>
          <FaCheck className='service__list-icon'/>
          <p>I am experienced in Front End </p>
          </li>

          <li>
          <FaCheck className='service__list-icon'/>
          <p>I am experienced in Front End </p>
          </li>

          <li>
          <FaCheck className='service__list-icon'/>
          <p>I am experienced in Front End </p>
          </li>

          <li>
          <FaCheck className='service__list-icon'/>
          <p>I am experienced in Front End </p>
          </li>

          <li>
          <FaCheck className='service__list-icon'/>
          <p>I am experienced in Front End </p>
          </li>

          <li>
          <FaCheck className='service__list-icon'/>
          <p>I am experienced in Front End </p>
          </li>

          </ul>
        </article>
        {/* End of ML */}




      </div>
    </section>
  )
}

export default Services