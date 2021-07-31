import { 
  START_GET_POPULAR_MOVIES, 
  START_SEARCH_MOVIE, 
  START_GET_MOVIE_BY_ID 
} from '../consts';

import {
  getMoviesPayload,
  searchMoviesPayload,
  getMoviesByIdPayload
} from '../../types';

// Actions
export const getPopularMovies = (payload: getMoviesPayload) => ({
  type: START_GET_POPULAR_MOVIES,
  payload
});

export const searchMovie = (payload: searchMoviesPayload) => ({
  type: START_SEARCH_MOVIE,
  payload
});

export const getMovieById = (payload: getMoviesByIdPayload) => ({
  type: START_GET_MOVIE_BY_ID,
  payload
});