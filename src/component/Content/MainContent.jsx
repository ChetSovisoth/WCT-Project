import ContentList from "./ContentList.jsx";
import DisplaySidebar from "./DisplaySidebar.jsx";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const MainContent = () => {
  const province = useSelector((state) => state.bookmarks.province);
  const [provinceData, setProvinceData] = useState([]);
  useEffect(() => {
    fetch("https://mock-json-v6.onrender.com/provincesdata")
    .then((response) => response.json())
    .then((json) => {
      const filteredProvinces = json.filter((data) => {
        return data.name.toLowerCase() === province.toLowerCase();
      });
      setProvinceData(filteredProvinces);
    });
  }, [province]);
  return (
    <div className="container-fluid p-0 row mt-3 mx-0">
      <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxxl-2 d-sm-inline d-flex justify-content-center flex-column">
        <DisplaySidebar provinceData={provinceData} />
      </div>
      <div className="col-sm-6 col-md-7 col-lg-8 col-xl-9 col-xxxl-10">
        <ContentList provinceData={provinceData}/>
      </div>
    </div>
  );
};

export default MainContent;
