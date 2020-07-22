import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import allReducers from './redux/reducers/index';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootSaga from './sagas/rootSaga';
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(allReducers,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
