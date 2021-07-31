import configureStore from 'redux-mock-store';
import { 
  START_GET_POPULAR_MOVIES, 
  START_SEARCH_MOVIE, 
  START_GET_MOVIE_BY_ID 
} from '../../../redux/consts';
import {
  getPopularMoviesPayload,
  searchMoviesPayload,
  getMovieByIdPayload
} from '../../../types';
import { 
  getPopularMovies, 
  searchMovie, 
  getMovieById 
} from '../../../redux/actions/movies';

describe('Movies actions', () => {
  const mockStore = configureStore();
  
  test('Should run the get popular movies action', () => {
    const store = mockStore({ });
    const payload: getPopularMoviesPayload = { page: 1 };
    store.dispatch(getPopularMovies(payload));
    
    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe(START_GET_POPULAR_MOVIES);
    expect(actions[0].payload).toEqual(payload);
  });
  test('Should run the search movies action', () => {
    const store = mockStore({ });
    const payload: searchMoviesPayload = { page: 1, query: 'movie' };
    store.dispatch(searchMovie(payload));

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe(START_SEARCH_MOVIE);
    expect(actions[0].payload).toEqual(payload);
  });
  test('Should run the get movie by id action', () => {
    const store = mockStore({ });
    const payload: getMovieByIdPayload = { id: 1 }
    store.dispatch(getMovieById(payload));

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe(START_GET_MOVIE_BY_ID);
    expect(actions[0].payload).toEqual(payload);
  });
})