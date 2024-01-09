import { useState, useEffect } from "react";
//import { LanguageContext } from "../../App";
import HightlightList from "../Content/HightlightList";
import LatestList from "../Content/LatestList";
import PopularList from "../Content/PopularList";

// import LanguageContext from '../../App'
const Home = () => {
  const [provinceData, setProvinceData] = useState();
    useEffect(() => {
      fetch("https://newest-3wwi.onrender.com/provincesData")
      .then((response) => response.json())
      .then((json) => {
        setProvinceData(json)
      });
    }, []);
  return (
    <div className="d-flex flex-column align-content-center">
      <div  className="d-flex flex-column align-content-center">
        <h1 className="text-center my-3 fw-bold">Our Popular</h1>
        <PopularList provinceData={provinceData} />
      </div>
      <div className="d-flex flex-column align-content-center">
        <h1 className="text-center my-3 fw-bold">Our Highlight</h1>
        <HightlightList provinceData={provinceData} />
      </div>
      <div className="d-flex flex-column align-content-center">
        <h1 className="text-center my-3 fw-bold">Our Latest</h1>
        <LatestList provinceData={provinceData}/>
      </div>
    </div>
  );
};

export default Home;
