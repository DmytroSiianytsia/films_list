import {connect} from 'react-redux';
import Header from "./Header";
import {findFilm, loadFilms, sortByTitle, sortByYear} from "../redux/actions";

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    sortByTitle: () => dispatch(sortByTitle()),
    sortByYear: () => dispatch(sortByYear()),
    findFilm: (value) => dispatch(findFilm(value)),
    loadFilms: () => dispatch(loadFilms())
  }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderContainer;
