export type getPopularMoviesPayload = {
  page: number
}

export type searchMoviesPayload = {
  page: number
  query: string
}

export type getMovieByIdPayload = {
  id: number
}

export type getPopularMoviesAction = {
  type: string
  payload: getPopularMoviesPayload
}

export type searchMoviesAction = {
  type: string
  payload: searchMoviesPayload
}

export type getMovieByIdAction = {
  type: string
  payload: getMovieByIdPayload
}

export type moviesState = {
  movies: any[]
  loadingMovies: boolean
  movie: any
  loadingMovie: boolean
}

export type stateToProps = {
  movies: moviesState
}
