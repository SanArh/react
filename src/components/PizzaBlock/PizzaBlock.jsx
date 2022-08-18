import React, { useState } from 'react';
import style from './PizzaBlock.module.css';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addPizza, addTotalPrice } from '../../redux/slices/cartSlice';

const PizzaBlock = ({ category, imageUrl, price, rating, sizes, title, types, id }) => {
  const pizzaTypes = ['тонкое', 'традиционное'];
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const dispatch = useDispatch();
  const addedPizza = useSelector((state) => state.pizzas.items.find((el) => el.id === id));

  const onButtonClick = ({}) => {
    dispatch(addPizza({ id, imageUrl, price, title, sizes }));
    dispatch(addTotalPrice(price));
  };

  return (
    <div className={style.pizza__block}>
      <Link to={`/cart/${id}`}>
        <img className={style.image} src={imageUrl} alt="pizza" />
        <h4 className={style.title}>{title}</h4>
      </Link>
      <div className={style.characteristics}>
        <div className={style.pizza__types}>
          {types.map((id) => (
            <span
              onClick={() => setActiveType(id)}
              className={classNames(id === activeType ? style.active : '', style.pizza__type)}
              key={id}>
              {pizzaTypes[id]}
            </span>
          ))}
        </div>
        <div className={style.sizes}>
          {sizes
            ? sizes.map((size, id) => (
                <div
                  className={classNames(id === activeSize ? style.active : '', style.size)}
                  key={size}
                  onClick={() => setActiveSize(id)}>
                  {size} см.
                </div>
              ))
            : null}
        </div>
      </div>
      <div className={style.price__block}>
        <div className={style.price}>от {price} ₽</div>
        <button className={style.btn} onClick={() => onButtonClick(price)}>
          <span className={style.plus}>+</span>
          <span>Добавить</span>
        </button>
      </div>
    </div>
  );
};

export default PizzaBlock;
