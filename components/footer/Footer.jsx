import React from 'react';
import './footer.css';
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <a href='/' className='footer__logo'>SOUNDARYA LAHARI VALIPE</a>

      <ul className='permalinks'>
        <li><a href='/'>HOME</a></li>
        <li><a href='#about'>ABOUT</a></li>
        <li><a href='#experience'>EXPERIENCE</a></li>
        <li><a href='#services'>SERVICES</a></li>
        <li><a href='#portfolio'>PORTFOLIO</a></li>
        <li><a href='#testimonials'>TESTIMONIALS</a></li>
        <li><a href='#contact'>CONTACT</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/soundarya--lahari/'><BsLinkedin /></a>
        <a href='https://github.com/soundaryalaharivalipe'><IoLogoGithub /></a>
        <a href='https://www.instagram.com/_soundaryalahari_/'><FaSquareInstagram /></a>
      </div>
    
      <div className="footer__copyright">
        <small> &copy; Soundarya Lahari Valipe. All Rights Reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
