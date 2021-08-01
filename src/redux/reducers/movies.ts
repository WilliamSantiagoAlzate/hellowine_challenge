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
  loadingMovie: false,
	totalPages: 0,
	isSearching: false,
	searchQuery: ''
}

export const movies = (state: moviesState = initialState, action: any) => {
	const { result, payload } = action;

	switch (action.type) {
		case START_GET_POPULAR_MOVIES:
			return {
				...state,
				movies: [],
        loadingMovies: true,
				totalPages: 0,
				isSearching: false
			}
		case SUCCESS_GET_POPULAR_MOVIES:
			return {
        ...state,
				loadingMovies: false,
				movies: result.results,
				totalPages: result.total_pages
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
				totalPages: 0,
				isSearching: true,
				searchQuery: payload.query
			}
		case SUCCESS_SEARCH_MOVIE:
			return {
        ...state,
				loadingMovies: false,
				movies: result.results,
				totalPages: result.total_pages
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
				movie: result
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
