import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

import { Link } from 'react-router-dom';

import './BuyerStyles.css';

import Products from '../products/Products';
import Home from '../home/Home';
import Cart from '../cart/Cart';

function Buyer() {
    const [buyer, setNav] = useState(false);
  
    return (<div>
       
        <div className='buyer'>
            <div className='buy'>
                <h2>Ecommerce</h2>
            </div>
            <ul className="buy-menu">
                <li>Home</li>
                <li>About</li>
                <li>Products</li>
                <li>cart</li>
                <li>Feedback</li>
            </ul>
            <div className="nav-icons">
               
                <Link to="/"><button>Logout</button></Link>
            </div>
            </div>
            <Home />
            <Products />
            <Cart />
            </div>
            
        
        
    );
}

export default Buyer;
