import React from 'react';
import style from './CartItem.module.css';

const CartItem = ({ imageUrl }) => {
  return (
    <div>
      <div>
        <img src={imageUrl} alt="pizza" className={style.pizza_icon} />
      </div>
      <div>
        <h3>dgh</h3>
        <p>dbj</p>
      </div>
      <div>
        <button></button>
        <span></span>
        <button></button>
      </div>
      <div>price</div>
      <div>
        <button>cancell</button>
      </div>
    </div>
  );
};

export default CartItem;
