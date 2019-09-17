import {connect} from 'react-redux';
import Films from "./Films";
import {loadFilms, removeFilm, showInfo} from "../redux/actions";

function mapStateToProps(state) {
  return {
    films: state.films,
    infoAboutFilm: state.infoAboutFilm,
    loadingFilms: state.loadingFilms,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadFilms: () => dispatch(loadFilms()),
    removeFilm: (idFilm) => dispatch(removeFilm(idFilm)),
    showInfo: (idFilm) => dispatch(showInfo(idFilm))
  }
}

const FilmsContainer = connect(mapStateToProps, mapDispatchToProps)(Films);
export default FilmsContainer;
