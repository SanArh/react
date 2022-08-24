import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Categories from '../../components/Categories/Categories';
import Sort from '../../components/Sort/Sort';
import { getPizzas } from '../../redux/slices/pizzaSlice';
import style from './Home.module.css';
import PizzaBlock from '../../components/PizzaBlock/PizzaBlock';
import { setCategory } from '../../redux/slices/filterSlice';
import Skeleton from '../../components/PizzaBlock/Skeleton';

const Home = () => {
  const pizzas = useSelector((state) => state.pizzas.items);
  const categoryId = useSelector((state) => state.filter.category);
  const sortValue = useSelector((state) => state.filter.sort.sortValue);
  const searchValue = useSelector((state) => state.filter.searchValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPizzas({ categoryId, sortValue, searchValue }));
  }, [categoryId, sortValue, searchValue]);

  const changeCategoryId = (id) => {
    dispatch(setCategory(id));
  };
  const skeleton = [...new Array(6)].map((_, ind) => <Skeleton key={ind} />);

  return (
    <div className={style.container}>
      <div className={style.content}>
        <Categories changeCategoryId={changeCategoryId} active={categoryId} />
        <Sort />
      </div>
      <div className={style.pizzas__wraper}>
        {skeleton}
        {/* {pizzas.map((item) => (
          <PizzaBlock key={item.id} {...item} />
        ))} */}
      </div>
    </div>
  );
};
export default Home;
