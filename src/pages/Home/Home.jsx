import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Categories from '../../components/Categories/Categories';
import Sort from '../../components/Sort/Sort';
import { getPizzas } from '../../redux/slices/pizzaSlice';
import style from './Home.module.css';
import PizzaBlock from '../../components/PizzaBlock/PizzaBlock';

const Home = () => {
  const pizzas = useSelector((state) => state.pizzas.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPizzas());
  }, []);
  return (
    <div className={style.container}>
      <div className={style.content}>
        <Categories />
        <Sort />
      </div>
      <div className={style.pizzas__wraper}>
        {pizzas.map((item) => (
          <PizzaBlock key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
export default Home;
