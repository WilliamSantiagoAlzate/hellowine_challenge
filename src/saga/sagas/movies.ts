import { put, call, takeLatest } from 'redux-saga/effects';
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
} from '../../redux/consts';
import {
  getPopularMoviesAction,
  searchMoviesAction,
  getMovieByIdAction
} from '../../types';
import { apiCall } from '../apiCall';

const apiUrl: string | undefined = process.env.REACT_APP_API_URL;
const apiKey: string | undefined = process.env.REACT_APP_API_KEY;

export function * getPopularMoviesRequest({ payload }: getPopularMoviesAction): Generator<any, any, any> {
  const { page } = payload;
  const url: string = `${apiUrl}/movie/popular?api_key=${apiKey}&language=es-MX&page=${page}&include_adult=false`;

  try {
    const result = yield call(apiCall, url, 'GET');
    yield put({ type: SUCCESS_GET_POPULAR_MOVIES, result });
  } catch(error) {
    yield put({ type: ERROR_GET_POPULAR_MOVIES, error });
  }
}

export function * searchMoviessRequest({ payload }: searchMoviesAction): Generator<any, any, any> {
  const { page, query } = payload;
  const url: string = `${apiUrl}/search/movie?api_key=${apiKey}&language=es-MX&page=${page}&include_adult=false&query=${query}`;


  try {
    const result = yield call(apiCall, url, 'GET');
    yield put({ type: SUCCESS_SEARCH_MOVIE, result });
  } catch(error) {
    yield put({ type: ERROR_SEARCH_MOVIE, error });
  }
}

export function * getMovieByIdRequest({ payload }: getMovieByIdAction): Generator<any, any, any> {
  const { id } = payload;
  const url: string = `${apiUrl}/movie/${id}?api_key=${apiKey}&language=es-MX`;

  try {
    const result = yield call(apiCall, url, 'GET');
    yield put({ type: SUCCESS_GET_MOVIE_BY_ID, result });
  } catch(error) {
    yield put({ type: ERROR_GET_MOVIE_BY_ID, error });
  }
}

// Create watchers
export default function * movies() {
  yield takeLatest(START_GET_POPULAR_MOVIES, getPopularMoviesRequest);
  yield takeLatest(START_SEARCH_MOVIE, searchMoviessRequest);
  yield takeLatest(START_GET_MOVIE_BY_ID, getMovieByIdRequest);
}