export type getMoviesPayload = {
  page: number
}

export type searchMoviesPayload = {
  page: number
  query: string
}

export type getMoviesByIdPayload = {
  id: number
}

export type getMoviesAction = {
  type: string
  payload: getMoviesPayload
}

export type searchMoviesAction = {
  type: string
  payload: searchMoviesPayload
}

export type getMoviesByIdAction = {
  type: string
  payload: getMoviesByIdPayload
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
