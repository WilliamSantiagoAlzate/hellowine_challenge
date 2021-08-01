export const movie = {
  id: 1,
  title: 'Movie',
  poster_path: 'Image',
  original_language: 'Lang',
  overview: 'Description'
};

export const movies = [movie];

export const state = {
  movies: {
    movies,
    loadingMovies: false,
    movie,
    loadingMovie: true,
    totalPages: 100,
    isSearching: true,
    searchQuery: 'Query'
  }
}