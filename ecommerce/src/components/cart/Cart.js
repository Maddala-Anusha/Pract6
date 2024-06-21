import React, { useState, useEffect } from 'react';
import './CartStyles.css';

const Cart = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: 'https://s.cdpn.io/3/dingo-dog-bones.jpg',
      title: 'Dingo Dog Bones',
      description: 'The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I\'m a fan.',
      price: 12.99,
      quantity: 2
    },
    {
      id: 2,
      image: 'https://s.cdpn.io/3/large-NutroNaturalChoiceAdultLambMealandRiceDryDogFood.png',
      title: 'Nutro™ Adult Lamb and Rice Dog Food',
      description: 'Who doesn\'t like lamb and rice? We\'ve all hit the halal cart at 3am while quasi-blackout after a night of binge drinking in Manhattan. Now it\'s your dog\'s turn!',
      price: 45.99,
      quantity: 1
    }
  ]);

  const [totals, setTotals] = useState({
    subtotal: 0,
    tax: 0,
    shipping: 15.00,
    total: 0
  });

  const taxRate = 0.05;
  const fadeTime = 300;

  useEffect(() => {
    recalculateCart();
  }, [products]);

  const recalculateCart = () => {
    let subtotal = 0;

    products.forEach(product => {
      subtotal += product.price * product.quantity;
    });

    const tax = subtotal * taxRate;
    const shipping = subtotal > 0 ? totals.shipping : 0;
    const total = subtotal + tax + shipping;

    setTotals({ subtotal, tax, shipping, total });
  };

  const updateQuantity = (id, quantity) => {
    setProducts(products.map(product => (
      product.id === id ? { ...product, quantity: quantity } : product
    )));
  };

  const removeItem = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>

      <div className="column-labels">
        <label className="product-image">Image</label>
        <label className="product-details">Product</label>
        <label className="product-price">Price</label>
        <label className="product-quantity">Quantity</label>
        <label className="product-removal">Remove</label>
        <label className="product-line-price">Total</label>
      </div>

      {products.map(product => (
        <div className="product" key={product.id}>
          <div className="product-image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-details">
            <div className="product-title">{product.title}</div>
            <p className="product-description">{product.description}</p>
          </div>
          <div className="product-price">{product.price.toFixed(2)}</div>
          <div className="product-quantity">
            <input
              type="number"
              value={product.quantity}
              min="1"
              onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
            />
          </div>
          <div className="product-removal">
            <button className="remove-product" onClick={() => removeItem(product.id)}>
              Remove
            </button>
          </div>
          <div className="product-line-price">{(product.price * product.quantity).toFixed(2)}</div>
        </div>
      ))}

      <div className="totals">
        <div className="totals-item">
          <label>Subtotal</label>
          <div className="totals-value" id="cart-subtotal">{totals.subtotal.toFixed(2)}</div>
        </div>
        <div className="totals-item">
          <label>Tax (5%)</label>
          <div className="totals-value" id="cart-tax">{totals.tax.toFixed(2)}</div>
        </div>
        <div className="totals-item">
          <label>Shipping</label>
          <div className="totals-value" id="cart-shipping">{totals.shipping.toFixed(2)}</div>
        </div>
        <div className="totals-item totals-item-total">
          <label>Grand Total</label>
          <div className="totals-value" id="cart-total">{totals.total.toFixed(2)}</div>
        </div>
      </div>

      <button className="checkout">Checkout</button>
    </div>
  );
};

export default Cart;
