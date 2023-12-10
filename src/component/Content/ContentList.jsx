import Content from "./Content"
import api from "../../assets/api"
import PropTypes from 'prop-types';

const ContentList = ({ language }) => {
  const attractions = api[language].phnomPenh;
  return (
    <>
      <div className="row">
          {attractions.map((items) => (
            <Content {...items} key={items.id}/>
            ))}
      </div>
    </>
  )
}
//Props-types validations
ContentList.propTypes = {
  language: PropTypes.string.isRequired,
};

export default ContentList