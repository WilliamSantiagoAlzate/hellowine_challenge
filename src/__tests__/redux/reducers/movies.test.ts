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
import { movies, initialState } from '../../../redux/reducers/movies';
import { movie, movies as moviesData } from '../../../__mocks__/data';

//Do test of app reducer
describe('Movies reducers', () => {
  test('Should returns the initial state', () => {
    expect(movies(undefined, {})).toEqual(initialState);
  });

  test('Set loading movies', () => {
    expect(
      movies(initialState, { type: START_GET_POPULAR_MOVIES })
    ).toEqual({ 
      ...initialState,
      loadingMovies: true 
    });
  });

  test('Set new movies and remove loading movies', () => {
    const result = { results: moviesData }
    expect(
      movies(initialState, { type: SUCCESS_GET_POPULAR_MOVIES, result })
    ).toEqual({
      ...initialState,
      loadingMovies: false,
      movies: moviesData
    });
  });

  test('Remove loading movies', () => {
    expect(
      movies(initialState, { type: ERROR_GET_POPULAR_MOVIES })
    ).toEqual({
      ...initialState,
      loadingMovies: false
    });
  });

  test('Set loading movies for search', () => {
    expect(
      movies(initialState, { type: START_SEARCH_MOVIE })
    ).toEqual({ 
      ...initialState,
      loadingMovies: true,
    });
  });

  test('Set new movies and remove loading movies for search', () => {
    const result = { results: moviesData }
    expect(
      movies(initialState, { type: SUCCESS_SEARCH_MOVIE, result})
    ).toEqual({
      ...initialState,
      loadingMovies: false,
      movies: moviesData
    });
  });

  test('Remove loading movies for search', () => {
    expect(
      movies(initialState, { type: ERROR_SEARCH_MOVIE })
    ).toEqual({
      ...initialState,
      loadingMovies: false
    });
  });

  test('Set loading movie', () => {
    expect(
      movies(initialState, { type: START_GET_MOVIE_BY_ID })
    ).toEqual({ 
      ...initialState,
      loadingMovie: true,
    });
  });

  test('Set new movie and remove loading movie', () => {
    const result = { results: movie }
    expect(
      movies(initialState, { type: SUCCESS_GET_MOVIE_BY_ID, result})
    ).toEqual({
      ...initialState,
      loadingMovie: false,
      movie
    });
  });

  test('Remove loading movie', () => {
    expect(
      movies(initialState, { type: ERROR_GET_MOVIE_BY_ID })
    ).toEqual({
      ...initialState,
      loadingMovie: false
    });
  });
});