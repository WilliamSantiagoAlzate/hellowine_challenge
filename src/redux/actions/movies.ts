import { 
  START_GET_POPULAR_MOVIES, 
  START_SEARCH_MOVIE, 
  START_GET_MOVIE_BY_ID 
} from '../consts';

import {
  getPopularMoviesPayload,
  searchMoviesPayload,
  getMovieByIdPayload
} from '../../types';

// Actions
export const getPopularMovies = (payload: getPopularMoviesPayload) => ({
  type: START_GET_POPULAR_MOVIES,
  payload
});

export const searchMovie = (payload: searchMoviesPayload) => ({
  type: START_SEARCH_MOVIE,
  payload
});

export const getMovieById = (payload: getMovieByIdPayload) => ({
  type: START_GET_MOVIE_BY_ID,
  payload
});