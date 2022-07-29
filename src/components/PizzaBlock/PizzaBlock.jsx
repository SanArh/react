import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPizzas } from '../../redux/slices/pizzaSlice';
import style from './PizzaBlock.module.css';

const PizzaBlock = () => {
  const pizzas = useSelector((state) => state.pizzas.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPizzas());
  }, []);
  return (
    <div>
      {pizzas.map((item) => (
        <img key={item.id} src={item.imageUrl}></img>
      ))}
    </div>
  );
};

export default PizzaBlock;
