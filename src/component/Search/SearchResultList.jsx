import PropTypes from 'prop-types';
import SearchResult from "./SearchResult.jsx";

const SearchResultsList = ({ results }) => {
  return (
    <div className='d-flex align-items-center flex-column results-list '>
      {results.map((result, id) => {
        return <SearchResult result={result.nameEn} key={id} />;
      })}
    </div>
  );
};

SearchResultsList.propTypes = {
  results: PropTypes.array.isRequired
}  

export default SearchResultsList