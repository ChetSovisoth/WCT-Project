import { useContext } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { LanguageContext } from "../../App";
import Content from "./Content";
import "../../assets/styles/search.css";
const SeasonList = ({ provinceData = [] }) => {
  const language = useContext(LanguageContext);
  const [selectedCategory, setSelectedCategory] = useState("all");

  if (
    !provinceData ||
    !provinceData[0] ||
    !provinceData[0][language] ||
    !provinceData[0][language].attraction
  ) {
    return <div>Data not available.</div>;
  }

  const filterData = (category) => {
    switch (category) {
      case "all":
        return [...provinceData[25][language].attraction];
      case "beach":
        return [...provinceData[26][language].attraction];
      case "nature":
        return [...provinceData[28][language].attraction];
      case "history":
        return [...provinceData[27][language].attraction];
      default:
        return [];
    }
  };

  const seasonData = filterData(selectedCategory);
  return (
    <>
      <div className="row ">
        <div className="col" href="">
          <button
            className="col btns btn-purple-moon "
            onClick={() => setSelectedCategory("all")}
          >
            All
          </button>
        </div>
        <div className="col">
          <button
            className="col btns btn-ultra-voilet"
            onClick={() => setSelectedCategory("beach")}
          >
            Beach
          </button>
        </div>
        <div className="col">
          <button
            className="col btns btn-pink-moon"
            onClick={() => setSelectedCategory("nature")}
          >
            Nature
          </button>
        </div>
        <div className="col">
          <button
            className="col btns btn-cool-blues"
            onClick={() => setSelectedCategory("history")}
          >
            Historical
          </button>
        </div>
      </div>
      <div className="row d-none d-md-inline-flex d-xl-none d-xxxl-inline-flex d-xxxl-inline-flex">
        {Array.from({ length: seasonData.length }, (_, index) => (
          <Content {...seasonData[index]} key={seasonData[index].id} />
        ))}
      </div>

      <div className="row d-md-none d-xl-inline-flex d-xxxl-none">
        {Array.from({ length: seasonData.length - 1 }, (_, index) => (
          <Content {...seasonData[index]} key={seasonData[index].id} />
        ))}
      </div>
    </>
  );
};
SeasonList.propTypes = {
  provinceData: PropTypes.array.isRequired,
};
export default SeasonList;