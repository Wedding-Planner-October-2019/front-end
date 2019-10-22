import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk'; //thunk 
import { Provider } from 'react-redux'; //Provider
import * as reducers from './state/reducers'

 

const rootReducer = combineReducers({
  plans: reducers.rootReducer
})


const store = createStore(
  rootReducer,
  compose (
      applyMiddleware(thunk),
  )
)

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>,
document.getElementById('root'));