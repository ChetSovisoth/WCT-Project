import Content from "./Content.jsx";
import PropTypes from "prop-types";
import { useContext } from "react";
import { LanguageContext } from "../../App.jsx";
const ContentList = ({ provinceData }) => {
  const language = useContext(LanguageContext);
  if (!provinceData || !provinceData[0] || !provinceData[0][language] || !provinceData[0][language].attraction) {
    return (
      <div className="d-flex justify-content-center ">
        <p className="mx-3">Loading</p>
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }
  const attractions = provinceData[0][language].attraction;
  return (
    <>
      <div className="row">
        {attractions.map((items) => (
          <Content {...items} key={items.id} provinceData={provinceData}/>
        ))}
      </div>
    </>
  );
};
ContentList.propTypes = {
  provinceData: PropTypes.array.isRequired,
};
export default ContentList;
