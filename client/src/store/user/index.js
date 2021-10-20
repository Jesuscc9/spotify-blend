import {  applyMiddleware, createStore, compose as composeRedux  } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from "./rootReducer";
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware(rootSaga);
const compose = process.env.NODE_ENV === 'production' ? composeRedux : composeWithDevTools;

export const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);