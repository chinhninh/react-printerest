import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import history from './History.js';
import App from './App';
import './index.css';
import allReducers from './redux/reducers/index';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootSaga from './sagas/rootSaga';
import createSagaMiddleware from "redux-saga";
import Loading from './components/loading/Loading';

const sagaMiddleware = createSagaMiddleware();

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (error) {
    console.log(error)
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (error) {
    console.log(error)
    return undefined
  }
}

const persistedState = loadFromLocalStorage()

const store = createStore(allReducers, persistedState, applyMiddleware(sagaMiddleware))

store.subscribe(() => saveToLocalStorage(store.getState()))

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Loading />}>
      <HashRouter history={history} basename="/">
        <App />
      </HashRouter>
    </Suspense>
  </Provider>,
  document.getElementById('root')
);
