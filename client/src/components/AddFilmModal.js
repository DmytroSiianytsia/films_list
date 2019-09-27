import React from 'react';
import '../css/addFilmModal.css';

export default function AddFilmModal(props) {
  const {addTrailer, addPoster, addTitle, addReleaseYear, addGenres, addStars, postFilm, film, addDescription} = props;
  const {title, release, genres, actors, urlPoster, trailer, film_description} = film;
  const toggleModal = () => {
    document.querySelector(".modal").classList.toggle("show-modal");
  };

  function windowOnClick(event) {
    const modal = document.querySelector(".modal");
    if (event.target === modal) {
      toggleModal();
    }
  }

  const getYears = () => {
    let years = [];
    for (let i = new Date().getFullYear(); i > 1887; i--) {
      years.push(i)
    }
    return years;
  };
  const years = getYears();
  const filmGenres = ['Комедия', 'Боевик', 'Детектив', 'Триллер',
    'Фантастика', 'Приключения', 'Мультфильм', 'Драма', 'Мелодрама'];

  return (
    <div>
      <div className='modal__trigger' onClick={toggleModal}>Добавить фильм</div>
      <div className='modal' onClick={(e) => windowOnClick(e)}>
        <div className='modal__content'>
          <form className='modal__form'>
            <div className='modal__element'>
              <div className='modal__label'>Название*</div>
              <input className='modal__title' type="text"
                     value={title}
                     onChange={event => addTitle(event.target.value)}
              />
            </div>
            <div className='modal__element'>
              <div className='modal__label'>Год*</div>
              <select className='modal__year' onChange={event => addReleaseYear(event.target.value)}>
                <option disabled={true} selected={true} value='Выберите год'>Выберите год</option>
                {years.map(year => <option value={year}>{year}</option>)}
              </select>
            </div>
            <div className='modal__element'>
              <div className='modal__label'>Жанр*</div>
              <select className='modal__genre' onChange={event => addGenres(event.target.value)}>
                <option disabled={true} selected={true} value='Выберите жанр'>Выберите жанр</option>
                {filmGenres.map(genre => <option value={genre}>{genre}</option>)}
              </select>
            </div>
            <div className='modal__element'>
              <div className='modal__label'>URL постера</div>
              <input className='modal__poster'
                     type="text"
                     value={urlPoster}
                     onChange={event => addPoster(event.target.value)}/>
            </div>
            <div className='modal__element'>
              <div className='modal__label'>youTube ID</div>
              <input className='modal__trailer'
                     placeholder='vQv2bK0XkXQ'
                     value={trailer}
                     onChange={event => addTrailer(event.target.value)}
              />
            </div>
            <div className='modal__element-actors'>
              <div className='modal__label'>Актеры</div>
              <textarea className='modal__actors'
                        type="text"
                        value={actors}
                        onChange={event => addStars(event.target.value)}
              />
            </div>
            <div className='modal__element-description'>
              <div className='modal__label'>Краткое содержание</div>
              <textarea className='modal__description'
                        type="text"
                        value={film_description}
                        onChange={event => addDescription(event.target.value)}
              />
            </div>
            <div className='modal__element'>
              {title && release && genres
                ?
                <div className='modal__addFilm'
                     onClick={() => {
                       postFilm(film);
                       toggleModal();
                     }}
                >Добавить
                </div>
                :
                <div className='modal__addFilm-disabled'
                     disabled={true}
                >Добавить
                </div>
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
