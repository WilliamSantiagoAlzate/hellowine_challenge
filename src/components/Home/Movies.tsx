import { Dispatch, useEffect } from "react";
import { connect } from "react-redux";
import { stateToProps } from '../../types'
import { getPopularMovies } from '../../redux/actions/movies';

type MoviesProps = {
  getPopularMovies(page: number): void
}

const Movies: React.FC<MoviesProps> = ({ getPopularMovies }) => {
  // Get popular movies
  useEffect(() => {
    getPopularMovies(1);
  }, [getPopularMovies])

  return (
    <section className="movies">
    </section>
  )
}

// Map Redux actions with dispatch funcion to component props
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  getPopularMovies(page: number) {
    dispatch(getPopularMovies({ page }))
  }
});

// Map state from global state to component props
const mapStateToProps = (state: stateToProps) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);