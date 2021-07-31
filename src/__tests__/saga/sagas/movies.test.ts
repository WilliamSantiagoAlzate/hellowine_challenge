import { put, call } from 'redux-saga/effects';
import {
  START_GET_POPULAR_MOVIES,
  SUCCESS_GET_POPULAR_MOVIES,
  ERROR_GET_POPULAR_MOVIES,
  START_SEARCH_MOVIE,
  SUCCESS_SEARCH_MOVIE,
  ERROR_SEARCH_MOVIE,
  START_GET_MOVIE_BY_ID,
  SUCCESS_GET_MOVIE_BY_ID,
  ERROR_GET_MOVIE_BY_ID
} from '../../../redux/consts';
import {
  getPopularMoviesAction,
  searchMoviesAction,
  getMovieByIdAction
} from '../../../types';
import { apiCall } from '../../../saga/apiCall';
import { 
  getPopularMoviesRequest, 
  searchMoviessRequest,
  getMovieByIdRequest 
} from '../../../saga/sagas/movies';

const apiUrl: string | undefined = process.env.REACT_APP_API_URL;
const apiKey: string | undefined = process.env.REACT_APP_API_KEY;

describe('Get popular movies request', () => {
  const page: number = 1;
  const action: getPopularMoviesAction = { type: START_GET_POPULAR_MOVIES, payload: { page } };
  
  it('Success response', () => {
    const getPopularMovies = getPopularMoviesRequest(action);
    const url: string = `${apiUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=${action.payload.page}&include_adult=false`;
    
    expect(getPopularMovies.next().value).toEqual(call(apiCall, url, 'GET'));
    expect(getPopularMovies.next().value).toEqual(put({ type: SUCCESS_GET_POPULAR_MOVIES }))
  })
  
  it('Error response', () => {
    const getPopularMovies = getPopularMoviesRequest(action);
    const error = 'Error';
    getPopularMovies.next();

    expect(getPopularMovies.throw(error).value).toEqual(put({ type: ERROR_GET_POPULAR_MOVIES, error }));
  })
})

describe('Search movies request', () => {
  const page: number = 1;
  const query: string = 'movie';
  const action: searchMoviesAction = { type: START_SEARCH_MOVIE, payload: { page, query }};
  
  it('Success response', () => {
    const searchMovies = searchMoviessRequest(action);
    const url: string = `${apiUrl}/search/movie?api_key=${apiKey}&language=en-US&page=${page}&include_adult=false&query=${query}`;
    
    expect(searchMovies.next().value).toEqual(call(apiCall, url, 'GET'));
    expect(searchMovies.next().value).toEqual(put({ type: SUCCESS_SEARCH_MOVIE }))
  })
  
  it('Error response', () => {
    const searchMovies = searchMoviessRequest(action);
    const error = 'Error';
    searchMovies.next();

    expect(searchMovies.throw(error).value).toEqual(put({ type: ERROR_SEARCH_MOVIE, error }));
  })
})

describe('Get movie by id request', () => {
  const id: number = 1;
  const action: getMovieByIdAction = { type: START_GET_MOVIE_BY_ID, payload: { id }};
  
  it('Success response', () => {
    const getMovieById = getMovieByIdRequest(action);
    const url: string = `${apiUrl}/movie/${id}?api_key=${apiKey}&language=en-US`;
    
    expect(getMovieById.next().value).toEqual(call(apiCall, url, 'GET'));
    expect(getMovieById.next().value).toEqual(put({ type: SUCCESS_GET_MOVIE_BY_ID }))
  })
  
  it('Error response', () => {
    const getMovieById = getMovieByIdRequest(action);
    const error = 'Error';
    getMovieById.next();

    expect(getMovieById.throw(error).value).toEqual(put({ type: ERROR_GET_MOVIE_BY_ID, error }));
  })
})
