import {
  ADD_DESCRIPTION,
  ADD_GENRES,
  ADD_POSTER,
  ADD_RELEASE_YEAR,
  ADD_STARS,
  ADD_TITLE,
  ADD_TRAILER,
  CLEAR_INPUT,
  FIND_FILM, findFilm,
  loadFilms,
  REMOVE_FILM,
  SHOW_FILMS,
  SHOW_INFO_ABOUT_FILM,
  SORT_FILMS_BY_TITLE,
  SORT_FILMS_BY_YEAR,
  UPDATE_SEARCH_INPUT
} from "./actions";
import {initialState} from "../components/initialState";

export default function reducer(state = initialState, action) {
  switch (action.type) {

    case SHOW_FILMS:
      return {
        ...state,
        films: action.films
      };

    case ADD_TITLE:
      return {
        ...state,
        film: {
          ...state.film,
          title: action.value
        }
      };

    case ADD_RELEASE_YEAR:
      return {
        ...state,
        film: {
          ...state.film,
          release: action.value
        }
      };

    case ADD_GENRES:
      return {
        ...state,
        film: {
          ...state.film,
          genres: action.value
        }
      };

    case ADD_STARS:
      return {
        ...state,
        film: {
          ...state.film,
          actors: action.value
        }
      };

    case ADD_POSTER:
      return {
        ...state,
        film: {
          ...state.film,
          urlPoster: action.value
        }
      };

    case ADD_TRAILER:
      return {
        ...state,
        film: {
          ...state.film,
          trailer: action.value
        }
      };

    case ADD_DESCRIPTION:
      return {
        ...state,
        film: {
          ...state.film,
          film_description: action.value
        }
      };

    case CLEAR_INPUT:
      return {
        ...state,
        film: {
          title: '',
          release: '',
          genres: '',
          actors: '',
          urlPoster: '',
          trailer: '',
          film_description: ''
        }
      };

    case REMOVE_FILM:
      return {
        ...state,
        films: state.films.filter(film => film.id !== action.idFilm)
      };

    case SHOW_INFO_ABOUT_FILM:
      if (state.infoAboutFilm === action.idFilm) {
        return {
          ...state,
          infoAboutFilm: null
        }
      } else {
        return {
          ...state,
          infoAboutFilm: action.idFilm
        };
      }

    case SORT_FILMS_BY_TITLE:
      const sortedFilmsByTitle = [...state.films].sort((film1, film2) =>
        (film1.title.toLowerCase() > film2.title.toLowerCase())
          ? 1 : ((film2.title.toLowerCase() > film1.title.toLowerCase())
          ? -1 : 0));
      return {
        ...state,
        films: sortedFilmsByTitle
      };

    case SORT_FILMS_BY_YEAR:
      const sortedFilmsByYear = [...state.films].sort((film1, film2) =>

        (film1.release > film2.release)
          ? 1 : ((film2.release > film1.release)
          ? -1 : 0));
      return {
        ...state,
        films: sortedFilmsByYear
      };

    case FIND_FILM:
      const {value} = action;
      const n = state.films;
      const searchFilms = n.filter(({title, actors}) =>
        title.toLowerCase().includes(value.toLowerCase())
        || actors.join('').toLowerCase().includes(value.toLowerCase()));
      return {
        ...state,
        films: searchFilms
      };

    default:
      return state;
  }
}
