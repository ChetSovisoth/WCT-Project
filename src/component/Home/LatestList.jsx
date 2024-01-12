import { useContext } from "react";
import { LanguageContext, ProvinceData } from "../../App";
import { useMediaQuery } from "react-responsive";
import Content from "./Content";
const LatestList = () => {
  const language = useContext(LanguageContext);
  const provinceData = useContext(ProvinceData);
  const isSmallScreen =  useMediaQuery({ query: '(min-width: 0) and (max-width: 814px)' });
  const isMediumScreen = useMediaQuery({ query: '(min-width: 1200px) and (max-width: 1699px)' });
  if (!provinceData || !provinceData[0] || !provinceData[0][language] || !provinceData[0][language].attraction) {
    return (
      <div className="d-flex justify-content-center ">
        <p className="mx-3">Loading</p>
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }

  let allAttractions = [];
  provinceData.forEach(province => {
    province[language].attraction.forEach(attraction => {
      allAttractions.push(attraction);
    });
  });
  allAttractions = allAttractions.reverse();
  const lastestFour = allAttractions.slice(0, 4);
  return (
    <>
      {
        (isSmallScreen || isMediumScreen) ? 
          <div className="row d-lg-none d-xl-inline-flex d-xxxl-none">
            {Array.from({ length: lastestFour.length - 1 }, (_, index) => (
              <Content {...lastestFour[index]} key={lastestFour[index].id} provinceData={provinceData} />
            ))}
          </div>
        :
          <div className="row d-none d-lg-inline-flex d-xl-none d-xxxl-inline-flex d-xxxl-inline-flex">
            {Array.from({ length: lastestFour.length }, (_, index) => (
              <Content {...lastestFour[index]} key={lastestFour[index].id} provinceData={provinceData} />
            ))}
          </div>
      }
    </>
  )
}
export default LatestList