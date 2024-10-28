import React from 'react';
import './nav.css';
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbMessages } from "react-icons/tb";
import { useState } from 'react';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
                <IoHomeOutline/>
            </a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
                <FaRegUser />
            </a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
                
                <MdOutlineDesignServices />
            </a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>
            <MdOutlineLibraryBooks />
            </a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
                <TbMessages />
            </a>
        </nav>
    );
};

export default Nav;
