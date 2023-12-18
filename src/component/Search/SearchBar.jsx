import './bgImg.css'
import PropTypes from 'prop-types';
import { useState } from 'react';

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
            );
          });
        console.log(results)
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <>
      <div className="container-fluid bg-light p-0 d-none d-lg-inline">
        <div className="d-flex justify-content-center align-items-center bg-img-lg">
          <div className='p-3 d-flex align-items-center bg-white rounded' style={{marginTop: "150px"}}>
            <i className="bi bi-search fs-5"></i>
            <input
              style={{width: "500px", height: "40px"}}
              className='rounded p-2 border-1 mx-4'
              placeholder="Type to search..."
              value={input}
              onChange={(e) => handleChange(e.target.value)}
            />
            <button className='btn btn-primary btn-lg d-flex align-items-center' style={{height: "42px"}}>Search</button>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light p-0 d-lg-none">
        <div className="d-flex justify-content-center align-items-center bg-img">
          <div className='bg-white p-3 rounded d-flex align-items-center' style={{marginTop: "150px"}}>
            <i className="bi bi-search fs-5"></i>
            <input
              style={{maxWidth: "600px", height: "40px"}}
              className='rounded p-2 border-1 mx-4'
              placeholder="Type to search..."
              value={input}
              onChange={(e) => handleChange(e.target.value)}
            />
            <button className='btn btn-primary btn-lg d-flex align-items-center' style={{height: "42px"}}>Search</button>
          </div>
        </div>
      </div>
    </>
  )
}
SearchBar.propTypes = {
  setResults: PropTypes.func.isRequired
}
export default SearchBar