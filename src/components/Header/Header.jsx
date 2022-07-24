import React from 'react';
import logo from '../../assets/pizza-logo.jpg';
import style from './Header.module.css';

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.header__logo}>
        <img className={style.logo__img} src={logo}></img>
        <div>
          <h1 className={style.logo__title}>pizza</h1>
          <p className={style.logo__suptitle}>вкуснейшая пицца на планете</p>
        </div>
      </div>
      <div>
        <input type="text" />
      </div>
      <div>Card</div>
    </div>
  );
};

export default Header;
