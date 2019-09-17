import {
  ADD_DESCRIPTION,
  ADD_GENRES, ADD_POSTER, ADD_RELEASE_YEAR, ADD_STARS, ADD_TITLE, ADD_TRAILER, CLEAR_INPUT,
  FIND_FILM, REMOVE_FILM, SHOW_FILMS, SHOW_INFO_ABOUT_FILM, SORT_FILMS
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

    case SORT_FILMS:
      const sortedFilms = state.films.filter(film => film).sort((film1, film2) =>
        (film1.title.toLowerCase() > film2.title.toLowerCase())
          ? 1 : ((film2.title.toLowerCase() > film1.title.toLowerCase())
          ? -1 : 0));
      return {
        ...state,
        films: sortedFilms
      };

    case FIND_FILM:
      const {value} = action;
      const searchFilms = state.films.filter(({title, actors}) =>
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
