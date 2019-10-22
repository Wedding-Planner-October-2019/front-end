import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; //thunk 
import { rootReducer } from './reducers'; //reducer
import { Provider } from 'react-redux'; //Provider

 




const store = createStore(rootReducer, 
    applyMiddleware(thunk)); //store

ReactDOM.render(
<Provider store={ store }>
<Router>
  <App />
</Router>
</Provider>,
document.getElementById('root')
);