// LoginSignUp.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import './LoginSignUpStyles.css';

const LoginSignUp = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <Navbar />
    <div className="main">
      <input 
        type="checkbox" 
        id="chk" 
        aria-hidden="true" 
        checked={isChecked} 
        onChange={handleCheckboxChange}
      />
      <div className={`signup ${isChecked ? 'inactive' : ''}`}>
        <form>
          <label htmlFor="chk" aria-hidden="true">Sign up</label>
          <input type="text" name="txt" placeholder="User name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="number" name="broj" placeholder="BrojTelefona" required />
          <input type="password" name="pswd" placeholder="Password" required />
          <button type="button">Sign up</button>
          <Link to="/Login"><button id='log2'>Login</button></Link>
        </form>
      </div>
      
      </div>
    </div>
  );
};

export default LoginSignUp;
