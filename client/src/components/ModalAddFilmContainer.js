import {connect} from 'react-redux';
import {
  addDescription,
  addGenres,
  addPoster,
  addReleaseYear,
  addStars,
  addTitle,
  addTrailer,
  postFilm
} from "../redux/actions";
import AddFilmModal from "./AddFilmModal";

function mapStateToProps(state) {
  return {
    film: state.film
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addDescription: (description) => dispatch(addDescription(description)),
    addTrailer: (urlTrailer) => dispatch(addTrailer(urlTrailer)),
    addPoster: (urlPoster) => dispatch(addPoster(urlPoster)),
    addTitle: (title) => dispatch(addTitle(title)),
    addReleaseYear: (releaseYear) => dispatch(addReleaseYear(releaseYear)),
    addGenres: (genres) => dispatch(addGenres(genres)),
    addStars: (stars) => dispatch(addStars(stars)),
    postFilm: (film) => dispatch(postFilm(film))
  }
}

const ModalAddFilmContainer = connect(mapStateToProps, mapDispatchToProps)(AddFilmModal);
export default ModalAddFilmContainer;
