import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href="https://www.linkedin.com/in/soundarya-lahari-valipe/" target='_blank'><BsLinkedin /></a>
    <a href="https://github.com/laharisv1998" target='_blank'><IoLogoGithub /></a>
    <a href="https://www.instagram.com/_soundaryalahari_/" target='_blank'><FaSquareInstagram /></a>
    </div>
  )
}

export default HeaderSocials