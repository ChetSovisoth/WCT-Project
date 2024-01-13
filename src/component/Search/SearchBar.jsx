import "../../assets/styles/search.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const fetchData = (value) => {
    fetch("https://province-api-sxzb.onrender.com/provincesData")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((data) => {
          return (
            value &&
            data.nameEn &&
            data.nameEn.trim().toLowerCase().includes(value)
          );
        });
        setResults(results);
      })
      .catch((error) => {
        console.error("Error fetching data with nameEn:", error);
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const handleSearchClick = () => {
    navigate(input.toLowerCase());
  };
  const redirectToAnotherPage = () => {
    // Use navigate to navigate to another page
    navigate("/quicktrip"); // Replace "/another-page" with the actual path
  };
  return (
    <>
      <div className="container-fluid bg-light p-0 d-none d-lg-inline">
        <div className="justify-content-center align-items-center bg-img-lg ">
          <div className="title ">
            <h1>TRAVEL AROUND CAMBODIA</h1>
            <p>
              Plan your trip and travel around Cambodai with the most affordable
              places
            </p>
          </div>
          <div className="col text-center">
            <button
              className="col button-17 btn-ultra-voilet mb-4"
              onClick={redirectToAnotherPage}
            >
              Quick Trip Planner
            </button>
          </div>

          <div
            className="p-3 d-flex align-items-center bg-white rounded "
            style={{ width: "50%", marginLeft: "21%" }}
          >
            <i className="bi bi-search fs-5"></i>
            <input
              style={{ width: "500px", height: "40px" }}
              className="rounded p-2 border-1 mx-4"
              placeholder="Type to search..."
              value={input}
              onChange={(e) => handleChange(e.target.value)}
            />
            <button
              className="btn btn-primary btn-lg d-flex align-items-center"
              style={{ height: "42px" }}
              onClick={handleSearchClick}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light p-0 d-lg-none">
        <div className="d-flex justify-content-center align-items-center bg-img">
          <div
            className="bg-white p-2 rounded d-flex align-items-center"
            style={{ marginTop: "20%" }}
          >
            <i className="bi bi-search fs-5"></i>
            <input
              style={{ maxWidth: "700px", height: "35px" }}
              className="rounded p-2 border-1 mx-4"
              placeholder="Type to search..."
              value={input}
              onChange={(e) => handleChange(e.target.value)}
            />
            <button
              className="btn btn-primary btn-lg d-flex align-items-center"
              style={{ height: "36px" }}
              onClick={handleSearchClick}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
SearchBar.propTypes = {
  setResults: PropTypes.func.isRequired,
};
export default SearchBar;