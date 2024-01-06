import Content from "./Content.jsx";
import PropTypes from "prop-types";
import { useContext } from "react";
import { LanguageContext } from "../../App.jsx";
const ContentList = ({ provinceData }) => {
  const language = useContext(LanguageContext) === 'English' ? 'en' : 'km';
  const dataItem = provinceData && provinceData[0];
  if (!dataItem || !dataItem.en) {
    return <div>Data not available.</div>;
  }
  const attractions = provinceData[0][language].attraction;
  return (
    <>
      <div className="row">
        {attractions.map((items) => (
          <Content {...items} provinceData={provinceData} key={items.id} />
        ))}
      </div>
    </>
  );
};
ContentList.propTypes = {
  provinceData: PropTypes.array.isRequired,
};
export default ContentList;
