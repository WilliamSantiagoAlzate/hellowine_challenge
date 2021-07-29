import { 
  START_GET_POPULAR_MOVIES, 
  START_SEARCH_MOVIE, 
  START_GET_MOVIE_BY_ID 
} from '../consts';

// Actions
export const getPopularMovies = (page: number) => ({
  type: START_GET_POPULAR_MOVIES,
  payload: { page }
});

export const searchMovie = (page: number, query: string) => ({
  type: START_SEARCH_MOVIE,
  payload: { page, query }
});

export const getMovieById = (id: number) => ({
  type: START_GET_MOVIE_BY_ID,
  payload: { id }
});