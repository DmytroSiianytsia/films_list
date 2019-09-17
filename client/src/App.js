import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import FilmsContainer from "./components/FilmsContainer";
import { logger } from "redux-logger";
import reducer from "./redux/reducers";
import HeaderContainer from "./components/HeaderContainer";

const store = createStore(reducer, applyMiddleware(thunk,logger));

export default function App() {
  return (
    <Provider store={store}>
      <HeaderContainer />
      <FilmsContainer />
    </Provider>
  );
}
