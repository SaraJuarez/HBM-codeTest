import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/index.js';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './sagas/index.js';

const sagaMiddleware = createSagaMiddleware();

const store = compose(
  applyMiddleware(sagaMiddleware),
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export default store; 