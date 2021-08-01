export const movie = {
  id: 1,
  poster_path: 'Image',
  title: 'Title',
  overview: 'Description',
  homepage: 'Homepage',
  popularity: 1000,
  status: 'Status',
  original_language: 'Language',
  spoken_languages: [{ iso_639_1: 1, name: 'Language' }],
  genres: [{ id: 1, name: 'Gender' }],
  production_companies: [{ id:1, name: 'Company' }]
}

export const movies = [movie];

export const state = {
  movies: {
    movies,
    loadingMovies: false,
    movie,
    loadingMovie: false,
    totalPages: 100,
    isSearching: true,
    searchQuery: 'Query'
  }
}