import { combineReducers } from 'redux';

// Reducers
import { movies } from './movies';

// Add reducers to root
export const rootReducer = combineReducers({
  movies
});
