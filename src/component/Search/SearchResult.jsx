import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProvince, setSearch } from '../../Redux/slice.js';
import { useDispatch } from 'react-redux';

const SearchResult = ({ result }) => {
  const dispatch = useDispatch();
  const handleSearchClick = () => {
    dispatch(getProvince(result));
    dispatch(setSearch(result));
  }
    return (
      <>
        <div className='bg-white p-2 fs-5' style={{width: "500px"}}>
          <Link to={result} className='nav-link' onClick={handleSearchClick}>{result}</Link>
        </div>
      </>
    );
};

SearchResult.propTypes = {
  result: PropTypes.string
} 

export default SearchResult