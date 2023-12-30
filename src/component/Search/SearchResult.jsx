import PropTypes from 'prop-types';

const SearchResult = ({ result }) => {
    return (
      <>
        <div className='bg-white p-2 fs-5' style={{width: "500px"}}>
          <div
            role='button'
            onClick={() => alert(`You selected ${result}!`)}
            >
            {result}
          </div>
        </div>
      </>
    );
};

SearchResult.propTypes = {
  result: PropTypes.string
} 

export default SearchResult