import Content from "./Content"
import api from "../assets/api"
import PropTypes from 'prop-types';

const ContentList = ({ language }) => {
  const attractions = api[language].phnomPenh;
  //Props-types validations
  ContentList.propTypes = {
    language: PropTypes.string.isRequired,
  };

  return (
    <div>
        <div className="row">
            {attractions.map((items) => (
              <Content {...items} key={items.id}/>
            ))}
        </div>
    </div>
  )
}

export default ContentList