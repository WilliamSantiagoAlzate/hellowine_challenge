import { useState, useMemo, useCallback, Dispatch } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchInput from '../UI/SearchInput';
import SearchIcon from '../../assets/search-icon.svg';
import { searchMovie } from '../../redux/actions/movies';
import debounce from 'lodash.debounce';

type HeaderProps = {
  searchMovie(page: number, query: string): any
}

const Header: React.FC<HeaderProps> = ({ searchMovie }) => { 
  const [movie, setMovieName] = useState('');

  const onChange = (value: string) => {
    setMovieName(value);
    debouncedSearch(value);
  }

  const search = useCallback((value: string) => {
    searchMovie(1, value);
  }, [searchMovie])

  const debouncedSearch = useMemo(() => debounce(search, 1000), [search]); 

  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__title">MOVIES</h1>
      </Link>
      <SearchInput
        value={movie}
        onChange={onChange}
        icon={SearchIcon}
      />
    </header>
  )
};

// Map Redux actions with dispatch funcion to component props
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  searchMovie(page: number, query: string) {
    dispatch(searchMovie({ page, query }))
  },
});

export default connect(null, mapDispatchToProps)(Header);