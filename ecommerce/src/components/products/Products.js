import React from 'react';
import './ProductsStyles.css'
import  ecommerce_1 from '../../assets/ecommerce_1.webp'
import jewellery from '../../assets/jewwllery.png'
import accessory from '../../assets/accessory.webp'
import bag from '../../assets/bag.jpg'
import fast from '../../assets/fast.jpeg'



function Products(){
    return(
        <div name='products' className='products'>
            <div className='contain'>
                <h1>
                   All-Inclusive Resorts
                </h1>
                <p>
                    On the Caribbean's Best Beaches
                </p>
                <div className="img-contain">
                    <img className='span-3 image-grid-row-2' src={ecommerce_1} alt="/" />
                    
                    <img src={fast} alt="/" />
                    <img src={jewellery} alt="/" />
                    <img src={accessory} alt="/" />
                    <img src={ bag} alt="/" />
                </div>

            </div>
            
            </div>
            
      
    )
}

export default Products;
