import React from "react";
import ReactDOM from 'react-dom';
import Counter from './containers/Counter';
import { reducer } from './containers/Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const store = createStore(reducer);

const htmlNode = document.getElementById('root');
ReactDOM.render(
  <Provider store={store} >
    <Counter />
  </Provider>, htmlNode);
