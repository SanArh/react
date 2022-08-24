import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';
import style from './Search.module.css';

const Search = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filter.searchValue);
  const changeSearch = (e) => {
    dispatch(setSearchValue(e.target.value));
  };
  return (
    <input
      className={style.input}
      type="text"
      placeholder="поиск пицц..."
      onChange={changeSearch}
      value={value}
    />
  );
};

export default Search;
