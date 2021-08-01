import { useState, useEffect, Dispatch } from "react";
import { connect } from "react-redux";
import { searchMovie, getPopularMovies } from '../../redux/actions/movies';
import { stateToProps } from '../../types'

type PaginatorProps = {
  searchMovie(page: number, query: string): void
  getPopularMovies(page: number): void
  totalPages: number
  isSearching: boolean
  searchQuery: string
}

const Paginator: React.FC<PaginatorProps> = ({
  searchMovie,
  getPopularMovies,
  totalPages,
  isSearching,
  searchQuery
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    getNewPage(currentPage + 1)
  }

  const prevPage = () => {
    getNewPage(currentPage - 1);
  }

  const getNewPage = (page: number) => {
    setCurrentPage(page)
    if (isSearching) {
      searchMovie(page, searchQuery);
    } else {
      getPopularMovies(page)
    }
  }

  useEffect(() => {
    setCurrentPage(1);
  }, [isSearching])

  if (totalPages === 0) {
    return null;
  }

  return (
    <section className="paginator">
      <button 
        className="button" 
        onClick={prevPage}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      <p className="paginator__number">
        <strong>{currentPage}</strong> <span>({totalPages})</span>
      </p>
      <button 
        className="button" 
        onClick={nextPage}
        disabled={currentPage === totalPages}
      >
        Siguiente
      </button>
    </section>
  )
} 

// Map Redux actions with dispatch funcion to component props
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  searchMovie(page: number, query: string) {
    dispatch(searchMovie({ page, query }))
  },
  getPopularMovies(page: number) {
    dispatch(getPopularMovies({ page }))
  }
});

// Map state from global state to component props
const mapStateToProps = (state: stateToProps) => ({
  totalPages: state.movies.totalPages,
  isSearching: state.movies.isSearching,
  searchQuery: state.movies.searchQuery,
});


export default connect(mapStateToProps, mapDispatchToProps)(Paginator);