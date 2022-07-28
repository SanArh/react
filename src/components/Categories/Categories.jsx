import React, { useState } from 'react';
import style from './Categories.module.css';
import classnames from 'classnames';

const Categories = () => {
  const listCategories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const [active, setActive] = useState(0);
  return (
    <div>
      <ul className={style.list}>
        {listCategories.map((item, ind) => (
          <li
            className={classnames(active === ind ? style.active : '', style.list__item)}
            key={item}
            onClick={() => setActive(ind)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
