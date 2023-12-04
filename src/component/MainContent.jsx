import ContentList from "./ContentList"
import Sidebar from "./Sidebar"
import PropTypes from 'prop-types';


const MainContent = ({language}) => {
  MainContent.propTypes = {
    language: PropTypes.string.isRequired,
  };

  return (
      <div className="container-fluid p-0 row mt-3 mx-0">
        <div className="col-xxl-2 col-lg-2">
          <Sidebar language={language}/>
        </div>
        <div className="col-xxl-10 col-lg-10">
          <ContentList language={language}/>
        </div>
      </div>
  )
}

export default MainContent