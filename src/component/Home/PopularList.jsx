import { useMediaQuery } from "react-responsive";
import { useContext, useEffect, useState } from "react";
import { ProvinceData, LanguageContext } from "../../App";
import Content from "./Content";
const PopularList = () => {
    const provinceData = useContext(ProvinceData);
    const language = useContext(LanguageContext);
    const [getHighRating, setHighRating] = useState([]);
    const isSmallScreen =  useMediaQuery({ query: '(min-width: 0) and (max-width: 814px)' });
    const isMediumScreen = useMediaQuery({ query: '(min-width: 1200px) and (max-width: 1699px)' });
    useEffect(() => {
      const items = [];
      let id = [];
      
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith("rating_")) {
          const rating = JSON.parse(localStorage.getItem(key));
          if (rating >= 4) {
            id = key.replace("rating_", "");
            items.push(id);
          }
        }
      }
      setHighRating(items);
    }, []);
    if (!provinceData || !provinceData[0] || !provinceData[0][language] || !provinceData[0][language].attraction) {
      return (
        <div className="d-flex justify-content-center ">
          <p className="mx-3">Loading</p>
          <div className="spinner-border" role="status"></div>
        </div>
      );
    }
    const getProvinceAndAttractionId = (attractionId) => {
      let result = {
        provinceId: null,
        attractionId: null
      };
      provinceData.forEach(province => {
        province.English.attraction.forEach(attraction => {
          if (attractionId === attraction.id) {
            result.provinceId = province.id;
            result.attractionId = province.English.attraction[0].id;
          }});
        });
        
        return result;
      };
      let popularData = [];
      for(let i = 0; i < getHighRating.length; i++) {
        const { provinceId, attractionId } = getProvinceAndAttractionId(Number(getHighRating[i]));
        popularData.push(provinceData[provinceId - 1][language].attraction[Number(getHighRating[i]) - attractionId]);
      }
      popularData = popularData.slice(0, 4);
  return (
    <>
      {
        (isSmallScreen || isMediumScreen) ?
          <div className="row d-md-none d-xl-inline-flex d-xxxl-none">
            <h1 className="text-center my-3 fw-bold">{language === 'English' ? 'Popular' : "កន្លែងពេញនិយម"}</h1>
            <p className={`lead ms-5 ${popularData.length == 0 ? "" : "d-none"}`}>{language === 'English' ? 'Popular places will be displayed here.' : 'កន្លែងពេញនិយមនឹងត្រូវបានបង្ហាញនៅទីនេះ។'}</p>
            {Array.from({ length: popularData.length - 1 }, (_, index) => (
              <Content {...popularData[index]} key={popularData[index].id} provinceData={provinceData} />
              ))}
          </div>
        :
        <div className="row d-none d-md-inline-flex d-xl-none d-xxxl-inline-flex d-xxxl-inline-flex">
          <h1  className="text-center my-3 fw-bold">{language === 'English' ? 'Popular' : "កន្លែងពេញនិយម"}</h1>
          <p className={`lead ms-5 ${popularData.length == 0 ? "" : "d-none"}`}>{language === 'English' ? 'Popular places will be displayed here.' : 'កន្លែងពេញនិយមនឹងត្រូវបានបង្ហាញនៅទីនេះ។'}</p>
          {Array.from({ length: popularData.length }, (_, index) => (
            <Content {...popularData[index]} key={popularData[index].id} provinceData={provinceData} />
          ))}
        </div>
      }
    </>
  )
}

export default PopularList