import React from 'react';
import { Link } from 'react-router-dom';
import style from './Cart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../../components/CartItem/CartItem';
import CartEmpty from '../../components/CartEmpty/CartEmpty';
import cn from 'classnames';
import { clearCart } from '../../redux/slices/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);
  if (!totalPrice) {
    return <CartEmpty />;
  }
  return (
    <div className={style.cart}>
      <div className={style.header}>
        <h2>Корзина</h2>
        <div className={style.clean} onClick={() => dispatch(clearCart())}>
          Очистить корзину
        </div>
      </div>
      {items.map((pizza) => (
        <CartItem {...pizza} key={pizza.id} />
      ))}
      <div className={style.footer}>
        <Link to="/" className={cn(style.btn, style.btn__back)}>
          Назад
        </Link>
        <div className={cn(style.btn, style.btn__pay)}>Оплатить сейчас</div>
      </div>
    </div>
  );
};
export default Cart;
