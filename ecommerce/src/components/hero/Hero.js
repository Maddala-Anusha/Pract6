
import React from 'react';
import './HeroStyles.css'

import bk1 from '../../assets/bk1.jpg'


function Hero() {
  return (
    <div className='hero'>
     <div className='bkhero'> <img src={bk1} alt='/' /></div>
     
       
      <div className='overlay'></div>
      <div className='content'>
        
            <h1> 
              First Class Products
            </h1>
            <h2>
              Top 1% Locations Worldwide
            </h2>
           
      </div>
      </div>
      
    
  )
}

export default Hero;
