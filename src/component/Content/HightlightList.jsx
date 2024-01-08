import { useContext } from "react";
import PropTypes from 'prop-types'
import { LanguageContext } from "../../App";
import Content from "./Content";
const HightlightList = ({ provinceData }) => {
  const language = useContext(LanguageContext);
  if (!provinceData || !provinceData[0] || !provinceData[0][language] || !provinceData[0][language].attraction) {
    return <div>Data not available.</div>;
  }
  const hightlightData = [
    provinceData[0][language].attraction[0],
    provinceData[1][language].attraction[0],
    provinceData[8][language].attraction[2],
    provinceData[20][language].attraction[2]
  ];
  return (
    <>
      <div className="row d-none d-md-inline-flex d-xl-none d-xxxl-inline-flex d-xxxl-inline-flex">
        {Array.from({ length: hightlightData.length }, (_, index) => (
          <Content {...hightlightData[index]} key={hightlightData[index].id} />
        ))}
      </div>
      <div className="row d-md-none d-xl-inline-flex d-xxxl-none">
        {Array.from({ length: hightlightData.length - 1 }, (_, index) => (
          <Content {...hightlightData[index]} key={hightlightData[index].id} />
        ))}
      </div>
    </>
  )
}
HightlightList.propTypes = {
  provinceData: PropTypes.array.isRequired
}
export default HightlightList