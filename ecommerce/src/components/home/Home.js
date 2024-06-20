import React from 'react';
import './HomeStyles.css'
import bk1 from './../../assets/bk1.jpg'
import { AiOutlineSearch } from 'react-icons/ai';

function Home() {
  return (
    <div className='home'>
      
      <div className='hoverlay'>
        <div className='himg'>
      <img src={bk1} alt='/' />
      </div>
      </div>
      <div className='hcontent'>
        
            <h1> 
              First Class Products
            </h1>
            <h2>
              Top 1% Products Worldwide
            </h2>
            <form className="hform">
              <div>
                <input type="text" placeholder='Search Products' />
              </div>
              <div>
                <button className='hbicon'><AiOutlineSearch className='icon' /></button>
              </div>


            </form>
      </div>
      </div>
      
    
  )
}

export default Home;
