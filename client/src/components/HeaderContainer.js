import {connect} from 'react-redux';
import Header from "./Header";
import {findFilm, loadFilms, sortFilms} from "../redux/actions";

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    sortFilms: () => dispatch(sortFilms()),
    findFilm: (value) => dispatch(findFilm(value)),
    loadFilms: () => dispatch(loadFilms())
  }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderContainer;
