import PropTypes from 'prop-types';
//import api from './../../assets/api.json'
const Bookmark = ({ onBookmarkClick, isBookmarked }) => {
  return (
    <button
      className={`btn position-absolute top-0 end-0 bg-white rounded-5 ${isBookmarked ? 'text-danger' : ''}`}
      style={{ fontSize: "1.5rem" }}
      onClick={onBookmarkClick}
    >
      <i className={`bi bi-heart${isBookmarked ? '-fill' : ''}`}></i>
    </button>
  );
};

Bookmark.propTypes = {
  onBookmarkClick: PropTypes.func.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
};

export default Bookmark