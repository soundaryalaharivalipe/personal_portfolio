import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn btn-primary'> Download CV </a>
        <a href="#about" className='btn btn-primary'> About Me </a>
        <a href="#experience" className='btn btn-primary'> Skills and Experience </a>
        <a href="#portfolio" className='btn btn-primary'> Projects </a>
        <a href="#contact" className='btn btn-primary'> Let's talk </a>
    </div>
  )
}

export default CTA 
