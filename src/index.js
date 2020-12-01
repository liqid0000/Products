import React from 'react';
import createSagaMiddleware from 'redux-saga';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './App';
import rootSaga from './sagas'
import { rootReducer } from './store/index'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <React.StrictMode>  
    <Provider store={store}>
      <App />
    </Provider>     
  </React.StrictMode>,
  document.getElementById('root')
);