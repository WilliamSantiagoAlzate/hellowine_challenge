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
  getMoviesAction,
  searchMoviesAction,
  getMoviesByIdAction
} from '../../types';
import { apiCall } from '../apiCall';

const apiUrl: string | undefined = process.env.REACT_APP_API_URL;
const apiKey: string | undefined = process.env.REACT_APP_API_KEY;

export function * getPopularMoviesRequest({ payload }: getMoviesAction): Generator<any, void, void> {
  const { page } = payload;

  try {
    const result = yield call(apiCall, `${apiUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=${page}&include_adult=false`, 'GET');
    yield put({ type: SUCCESS_GET_POPULAR_MOVIES, result });
  } catch(error) {
    yield put({ type: ERROR_GET_POPULAR_MOVIES, error });
  }
}

export function * searchMoviessRequest({ payload }: searchMoviesAction): Generator<any, void, void> {
  const { page, query } = payload;

  try {
    const result = yield call(apiCall, `${apiUrl}/search/movie?api_key=${apiKey}&language=en-US&page=${page}&include_adult=false&query=${query}`, 'GET');
    yield put({ type: SUCCESS_SEARCH_MOVIE, result });
  } catch(error) {
    yield put({ type: ERROR_SEARCH_MOVIE, error });
  }
}

export function * getMovieByIdRequest({ payload }: getMoviesByIdAction): Generator<any, void, void> {
  const { id } = payload;

  try {
    const result = yield call(apiCall, `${apiUrl}/movie/${id}?api_key=${apiKey}&language=en-US`, 'GET');
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