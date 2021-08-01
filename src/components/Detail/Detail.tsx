import { Dispatch, useEffect } from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";
import Spinner from '../UI/Spinner';
import MovieDetail from './MovieDetail';
import { stateToProps, spinnerColors, params } from '../../types'
import { getMovieById } from '../../redux/actions/movies';

type DetailProps = {
  getMovieById(id: number): void
  movie: any,
  loadingMovie: boolean
}

const Detail: React.FC<DetailProps> = ({
  getMovieById,
  movie,
  loadingMovie
}) => {
  const params: params = useParams();

  // Get movie
  useEffect(() => {
    getMovieById(Number(params.id));
  }, [getMovieById, params])

  return (
    <>
      {loadingMovie ? 
        <section className="spinner__container">
          <Spinner color={spinnerColors.black} /> 
        </section>
        :
        Object.keys(movie).length > 0 &&
        <MovieDetail 
          image={movie.poster_path}
          title={movie.title}
          description={movie.overview}
          homepage={movie.homepage}
          popularity={movie.popularity}
          status={movie.status}
          originalLanguage={movie.original_language}
          spokenLanguages={movie.spoken_languages}
          genders={movie.genres}
          productionCompanies={movie.production_companies}
        />
      } 
    </>
  )
}

// Map Redux actions with dispatch funcion to component props
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  getMovieById(id: number) {
    dispatch(getMovieById({ id }))
  }
});

// Map state from global state to component props
const mapStateToProps = (state: stateToProps) => ({
  movie: state.movies.movie,
  loadingMovie: state.movies.loadingMovie
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);