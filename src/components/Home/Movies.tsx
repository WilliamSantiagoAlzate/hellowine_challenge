import { Dispatch, useEffect } from "react";
import { connect } from "react-redux";
import MovieCard from './MovieCard';
import Spinner from '../UI/Spinner';
import { stateToProps, spinnerColors } from '../../types'
import { getPopularMovies } from '../../redux/actions/movies';

type MoviesProps = {
  getPopularMovies(page: number): void
  movies: any[]
  loadingMovies: boolean
}

const Movies: React.FC<MoviesProps> = ({ 
  getPopularMovies, 
  movies,
  loadingMovies 
}) => {
  // Get popular movies
  useEffect(() => {
    getPopularMovies(1);
  }, [getPopularMovies])
  
  return (
    <>
      {loadingMovies ? 
        <section className="spinner__container">
          <Spinner color={spinnerColors.black} /> 
        </section>
        : 
        <section className="movies">
          {movies.map(movie =>
            <div className="movie-card__container" key={movie.id}>
              <MovieCard
                id={movie.id} 
                title={movie.title}
                image={movie.poster_path}
                lang={movie.original_language}
                description={movie.overview} 
              />
            </div> 
          )}
        </section>
      }
    </>
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
  loadingMovies: state.movies.loadingMovies
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);