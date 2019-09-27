export const SHOW_FILMS = 'show_films';
export const ADD_TITLE = 'add_title';
export const ADD_RELEASE_YEAR = 'add_release_year';
export const ADD_GENRES = 'add_format';
export const ADD_STARS = 'add_stars';
export const REMOVE_FILM = 'remove_film';
export const SHOW_INFO_ABOUT_FILM = 'show_info_about_film';
export const SORT_FILMS_BY_TITLE = 'sort_films_by_title';
export const SORT_FILMS_BY_YEAR = 'sort_films_by_year';
export const FIND_FILM = 'find_film';
export const CLEAR_INPUT = 'clear_input';
export const ADD_POSTER = 'add_poster';
export const ADD_TRAILER = 'add_trailer';
export const ADD_DESCRIPTION = 'add_description';

export function postFilm() {
  return (dispatch, getState) => {
    fetch('/api', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(getState().film)
    })
      .then(dispatch(clearInput()))
      .then(dispatch(loadFilms()))
  }
}

function clearInput() {
  return {
    type: CLEAR_INPUT
  }
}

export function loadFilms() {
  return dispatch => {
    fetch('/id')
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          throw(data.error);
        }
        dispatch(showFilms(data))
      })
      .catch(error => {
        console.log('ERROR: ' + error)
      })
  }
}

function showFilms(films) {
  return {
    type: SHOW_FILMS,
    films
  }
}

export function addTitle(value) {
  return {
    type: ADD_TITLE,
    value
  }
}

export function addReleaseYear(value) {
  return {
    type: ADD_RELEASE_YEAR,
    value
  }
}

export function addGenres(value) {
  return {
    type: ADD_GENRES,
    value
  }
}

export function addStars(value) {
  return {
    type: ADD_STARS,
    value
  }
}

export function addPoster(value) {
  return {
    type: ADD_POSTER,
    value
  }
}

export function addTrailer(value) {
  return {
    type: ADD_TRAILER,
    value
  }
}

export function addDescription(value) {
  return {
    type: ADD_DESCRIPTION,
    value
  }
}

export function removeFilm(idFilm) {
  return dispatch => {
    fetch(`/api/${idFilm}`, {
      method: 'DELETE'
    })
      .then(dispatch(loadFilms()))
  }
}

export function showInfo(idFilm) {
  return {
    type: SHOW_INFO_ABOUT_FILM,
    idFilm
  }
}

export function sortByTitle() {
  return {
    type: SORT_FILMS_BY_TITLE,
  }
}

export function sortByYear() {
  return {
    type: SORT_FILMS_BY_YEAR,
  }
}

export function findFilm(value) {
  return {
    type: FIND_FILM,
    value
  }
}
