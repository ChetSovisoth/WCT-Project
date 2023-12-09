import { useState } from "react";
import api from "../assets/api"
import PropTypes from 'prop-types';
const Sidebar = ({ language }) => {
  const[displaySidebar, setDisplaySidebar] = useState(false);
  return (
    <>
      <p className="d-inline-flex gap-1 d-sm-none justify-content-center ">
        <a className="btn btn-outline-primary" data-bs-toggle="collapse" href="#sidebar" role="button" aria-expanded="false" aria-controls="collapseExample" onClick={() => setDisplaySidebar(!displaySidebar)}>
          Display City Infomation
        </a>
      </p>
      <div className={`ms-3 mt-2 sticky-top d${displaySidebar ? '-inline' : '-none'} d-sm-inline`} id="sidebar">
        <div className="d-flex flex-column align-items-center">
          <iframe
            title="My Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250151.42198261587!2d104.89018675!3d11.57936425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh!5e0!3m2!1sen!2skh"
            style={{ border: '0', maxWidth: "90%", maxHeight: "300px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="shadow bg-body-tertiary rounded mx-auto"
            ></iframe>

          <p className="p-3 fs-3 mb-2 ms-2 lead fw-bold">{api[language].city}</p>
          <div className="card mb-3 bg-light border-0" style={{width: "18rem"}}>
            <div className="card-body">
              <h5 className="card-title text-center">{api[language].intro}</h5>
              <div className="rounded bg-white shadow bg-body-tertiary my-4">
                <p className="card-text p-3">{api[language].description}</p>
              </div>
              <img className="img-fluid rounded mb-3 " src={api[language].cityPicture} alt="Picture of City" />
            </div>
          </div>
          <div className="container p-3 d-flex justify-content-center align-items-center flex-column">
            <a className="btn btn-outline-black border-3 border-black mb-2" href={api[language].restaurant} style={{width: "288px"}} target="_blank" rel="noopener noreferrer">Restaurants</a>
            <a className="btn btn-outline-black border-3 border-black mb-2" href={api[language].accomadation} style={{width: "288px"}}>Accomadations</a>
          </div>
        </div>
      </div>
    </>
  )
}
Sidebar.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Sidebar