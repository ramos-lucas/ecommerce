import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './combineReducers';
import sagas from './combineSagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

export default store;
