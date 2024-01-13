import{ useState, useContext } from "react";
import SeasonList from "../Content/SeasonList";
import SearchBar from "../Search/SearchBar.jsx";
import SearchResultsList from "../Search/SearchResultList.jsx";
import { ProvinceData } from "../../App.jsx";
const QuickTripPlanner = () => {
  const [results, setResults] = useState([]);
  const provinceData = useContext(ProvinceData);
  return (
    <>
      <SearchBar setResults={setResults} />
      {results && results.length > 0 && <SearchResultsList results={results} />}
      <div className="d-flex flex-column mt-5 align-content-start ">
        <h2 className="text-center">Quick Trip Planner</h2>
        <SeasonList provinceData={provinceData} />
      </div>
    </>
  );
};

export default QuickTripPlanner;