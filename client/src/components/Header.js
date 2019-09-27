import React from 'react';
import '../css/header.css';
import ModalAddFilmContainer from "./ModalAddFilmContainer";

export default function header(props) {
  const showSortList = () => {
    document.querySelector('.header__sort-list').classList.toggle('show')
  };
  return (
    <div className='header__container'>
      <div className='header'>
        <div className='header__sort' onClick={showSortList}>
          Сортировать
          <ul className='header__sort-list'>
            <li onClick={props.sortByTitle}>Название</li>
            <li onClick={props.sortByYear}>Год</li>
            <li onClick={props.loadFilms}>Добавлен</li>
          </ul>
        </div>
        <div className='header__add-film'>
          <ModalAddFilmContainer/>
        </div>
        <div className='header__search'>
          <input type="text"
                 placeholder='Input title or actor'
                 onChange={event => {
                   if (event.target.value === '') {
                     props.loadFilms();
                   } else {
                     props.findFilm(event.target.value.trim())
                   }
                 }}
          />
        </div>
      </div>
    </div>
  )
}
