import React from 'react';
import { Link } from 'react-router-dom';
import style from './Cart.module.css';
import cart from '../../assets/shopping_cart_014.jpg';

const Cart = () => {
  return (
    <div className={style.cart}>
      <h2 className={style.header}>Ваша корзина пуста</h2>
      <p className={style.text}>
        Воспользуйтесь поиском на главной странице, чтобы найти нужную пиццу
      </p>
      <img className={style.img} src={cart} alt="cart" />
      <Link to="/" className={style.link}>
        Вернуться на главную
      </Link>
    </div>
  );
};
export default Cart;
