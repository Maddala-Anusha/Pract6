import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import bk1 from "./../../assets/bk1.jpg"
import './NavbarStyles.css';

function Navbar() {
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);

    return (
        <div className={nav? 'navbar navbar-bg' : 'navbar'}>
            <div name='home' className={nav ? 'logo dark' : 'logo'}>
                <h2>Ecommerce</h2>
            </div>
            <ul className="nav-menu">
                <li>Home</li>
                <li>Destination</li>
                <li>Travel</li>
                <li>Book</li>
                <li>Views</li>
            </ul>
            <div className="nav-icons">
                <BiSearch className='icon' style={{ marginRight: '1rem' }} />
                <Link to="/LoginSignUp"><button id='log' >Login/Signup</button></Link>
            </div>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (
                    <HiOutlineMenuAlt4 className='icon' />
                ) : (
                    <AiOutlineClose style={{ color: '#000' }} className='icon' />
                )}
            </div>
            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                    <li>Home</li>
                    <li>Destination</li>
                    <li>Travel</li>
                    <li>Book</li>
                    <li>Views</li>
                </ul>
                <div className="mobile-menu-button">
                    <div className="menu-icon">
                        <button className="button-color">
                            Search
                        </button>
                        <button className="button-color">
                            Account
                        </button>
                    </div>
                    <div className="social-icons">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
            </div>
            
        </div>
        
    );
}

export default Navbar;
