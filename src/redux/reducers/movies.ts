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
} from '../consts';

import { moviesState } from '../../types'

export const initialState = {
  movies: [],
  loadingMovies: false,
  movie: {},
  loadingMovie: false
}

export const movies = (state: moviesState = initialState, action: any) => {
	switch (action.type) {
		case START_GET_POPULAR_MOVIES:
			return {
				...state,
				movies: [],
        loadingMovies: true
			}
		case SUCCESS_GET_POPULAR_MOVIES:
			return {
        ...state,
				loadingMovies: false,
				movies: action.result.results
			}
    case ERROR_GET_POPULAR_MOVIES:
			return {
				...state,
				loadingMovies: false
			}
		case START_SEARCH_MOVIE:
			return {
				...state,
				movies: [],
        loadingMovies: true,
			}
		case SUCCESS_SEARCH_MOVIE:
			return {
        ...state,
				loadingMovies: false,
				movies: action.result.results
			}
    case ERROR_SEARCH_MOVIE:
			return {
				...state,
				loadingMovies: false,
			}
		case START_GET_MOVIE_BY_ID:
			return {
				...state,
				movie: {},
        loadingMovie: true,
			}
		case SUCCESS_GET_MOVIE_BY_ID:
			return {
        ...state,
				loadingMovie: false,
				movie: action.result.results
			}
    case ERROR_GET_MOVIE_BY_ID:
			return {
				...state,
				loadingMovie: false,
			}
		default:
			return { ...state };
	}
}
