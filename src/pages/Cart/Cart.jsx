import React from 'react';
import { Link } from 'react-router-dom';
import style from './Cart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../../components/CartItem/CartItem';
import CartEmpty from '../../components/CartEmpty/CartEmpty';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);
  console.log(totalPrice);
  if (!totalPrice) {
    return <CartEmpty />;
  }
  return (
    <div>
      <div>
        <h2>Корзина</h2>
        <div>Очистить корзину</div>
      </div>
      {items.map((pizza) => (
        <CartItem {...pizza} key={pizza.id} />
      ))}
      <div>
        <Link to="/">Back</Link>
        <button>Оплатить сейчас</button>
      </div>
    </div>
  );
};
export default Cart;
