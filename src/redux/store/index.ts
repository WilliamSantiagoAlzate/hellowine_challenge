import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Reducers
import { rootReducer } from '../reducers';

// Saga watchers
import rootSaga from '../../saga';

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create store with saga middleware
export const storeFn = () => {
  return {
    ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga)
  };
};
