import PropTypes from 'prop-types';
import Content from '../Content/Content'
import api from './../assets/api'
const Bookmark = ({ language }) => {
  const attractions = api[language].phnomPenh;
  return (
      <div className='row'>
        {attractions.map((items) => (
          <Content {...items} key={items.id}/>
          ))}
      </div>
  )
}

Bookmark.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Bookmark