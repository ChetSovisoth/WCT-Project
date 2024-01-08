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
        <h2 className="text-center">Our Popular</h2>
        <PopularList provinceData={provinceData} />
      </div>
      <div className="d-flex flex-column align-content-center">
        <h2 className="text-center">Our Highlight</h2>
        <HightlightList provinceData={provinceData} />
      </div>
      <div className="d-flex flex-column align-content-center">
        <h2 className="text-center">Our Latest</h2>
        <LatestList provinceData={provinceData}/>
      </div>
    </div>
  );
};

export default Home;
