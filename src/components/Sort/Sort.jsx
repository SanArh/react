import React, { useEffect, useRef, useState } from 'react';
import style from './Sort.module.css';

const Sort = () => {
  const refSort = useRef(null);

  const sortList = ['популярности', 'цене', 'алфавиту'];
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(sortList[0]);

  const changeSelected = (item) => {
    setSelected(item);
    setOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.path.includes(refSort.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <div ref={refSort} className={style.menu}>
      <span className={style.menu__title}>Сортировка по:</span>
      <span className={style.selected} onClick={() => setOpen(!open)}>
        {selected}
      </span>
      {open && (
        <ul className={style.list}>
          {sortList.map((item) => (
            <li
              className={item === selected ? style.selected : ''}
              key={item}
              onClick={() => changeSelected(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sort;
