import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPinterest } from 'react-icons/fa';
import './NavbarStyles.css';
import Login from '../login/Login';

function Navbar() {
  const [nav, setNav] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // State for showing login modal

  const handleNav = () => setNav(!nav);
  const toggleLogin = () => setShowLogin(!showLogin);

  return (
    <div className='navbar'>
      <div name='home' className={nav ? 'logo dark' : 'logo'}>
        <h2>E-Commerce</h2>
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
      <div className="nav-icons">
        
        <button onClick={toggleLogin}>Login</button>
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
            <button className="button-color">Search</button>
            <button className="button-color">Account</button>
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
      {showLogin && <Login />} {/* Render the Login component conditionally */}
    </div>
  );
}

export default Navbar;
