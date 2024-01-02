import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../../assets/style.css/home.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://j-son-v10.onrender.com/")
    
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((data) => {
          return (
            value &&
            data &&
            data.name &&
            data.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        onMouseMove={() => setResults([])}
      />
    </div>
  );
};
