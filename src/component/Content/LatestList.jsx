import Content from "./Content";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { LanguageContext } from "../../App";
const LatestList = ({ provinceData }) => {
  const language = useContext(LanguageContext);
  if (!provinceData || !provinceData[0] || !provinceData[0][language] || !provinceData[0][language].attraction) {
    return <div>Data not available.</div>;
  }

  let allAttractions = [];
  provinceData.forEach(province => {
    province.English.attraction.forEach(attraction => {
      allAttractions.push(attraction);
    });
  });
  allAttractions = allAttractions.reverse();
  const lastestFour = allAttractions.slice(0, 4);
  return (
    <>
      <div className="row d-none d-lg-inline-flex d-xl-none d-xxxl-inline-flex d-xxxl-inline-flex">
        {Array.from({ length: lastestFour.length }, (_, index) => (
          <Content {...lastestFour[index]} key={lastestFour[index].id} />
        ))}
      </div>
      <div className="row d-lg-none d-xl-inline-flex d-xxxl-none">
      {Array.from({ length: lastestFour.length - 1 }, (_, index) => (
          <Content {...lastestFour[index]} key={lastestFour[index].id} />
        ))}
      </div>
    </>
  )
}
LatestList.propTypes = {
  provinceData: PropTypes.array.isRequired
}
export default LatestList