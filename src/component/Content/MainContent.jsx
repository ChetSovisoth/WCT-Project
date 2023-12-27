import ContentList from "./ContentList"
import DisplaySidebar from "./DisplaySidebar"
import PropTypes from 'prop-types';


const MainContent = ({ language }) => {
  
  return (
    <div className="container-fluid p-0 row mt-3 mx-0">
        <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxxl-2 d-sm-inline d-flex justify-content-center flex-column">
          <DisplaySidebar language={language}/>
        </div>
        <div className="col-sm-6 col-md-7 col-lg-8 col-xl-9 col-xxxl-10">
          <ContentList language={language}/>
        </div>
      </div>
  )
}
MainContent.propTypes = {
  language: PropTypes.string.isRequired,
};

export default MainContent