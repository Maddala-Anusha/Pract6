
import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import './LoginStyles.css';
import { Link } from 'react-router-dom';

const Login= () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <Navbar />
    <div className="mains">
      <input 
        type="checkbox" 
        id="chke" 
        aria-hidden="true" 
        checked={isChecked} 
        onChange={handleCheckboxChange}
      />
      
      <div className={`signups ${isChecked ? 'inactives' : ''}`}>
        <form>
          <label htmlFor="chke" aria-hidden="true">Login</label>
          <input type="text" name="txt" placeholder="User name" id='user1' required />
          <input type="email" name="email" placeholder="Email" id='email1' required />
          
          <input type="password" name="pswd" placeholder="Password" id='pswd1' required />
          <Link to="/Buyer"><button id='log3' type='submit'>Login</button></Link>
         
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
