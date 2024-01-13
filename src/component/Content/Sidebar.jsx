import { useContext } from 'react';
import { LanguageContext } from '../../App.jsx';
import PropTypes from 'prop-types';
const Sidebar = ({ provinceData }) => {
  const language = useContext(LanguageContext);
  if (!provinceData || !provinceData[0] || !provinceData[0][language] || !provinceData[0][language].attraction) {
    return (
      <div className="d-flex justify-content-center ">
        <p className="mx-3">Loading</p>
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }
  return (
    <div className="ms-3 mt-2 sticky-top">
      <div className="d-flex flex-column align-items-center">
        <iframe
          title="My Google Map"
          src={provinceData[0].provinceMap}
          style={{ border: '0', maxWidth: "90%", maxHeight: "300px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="shadow bg-body-tertiary rounded mx-auto"
          ></iframe>

        <p className="p-3 fs-3 mb-2 ms-2 lead fw-bold">{provinceData[0][language].province}</p>
        <div className="card mb-3 bg-light border-0" style={{width: "16rem"}}>
          <div className="card-body">
            <h5 className="card-title text-center">{provinceData[0][language].city}</h5>
            <div className="rounded bg-white shadow bg-body-tertiary my-4">
              <p className="card-text p-3">{provinceData[0][language].description}</p>
            </div>
            <img className="img-fluid rounded mb-3 " src={provinceData[0].cityPicture} alt="Picture of City" />
          </div>
        </div>
        <div className="container p-3 d-flex justify-content-center align-items-center flex-column">
          <a className="btn btn-outline-black border-3 border-black mb-2" href={provinceData[0].restaurant} style={{width: "288px"}} target="_blank" rel="noopener noreferrer">{language === 'English' ? 'Restaurants' : "ភោជនីយដ្ឋាន"}</a>
          <a className="btn btn-outline-black border-3 border-black mb-2" href={provinceData[0].accomadation} style={{width: "288px"}} target="_blank" rel="noopener noreferrer">{language === 'English' ? 'Accomadations' : "កន្លែងស្នាក់នៅ"}</a>
        </div>
      </div>
    </div>
  )
}
Sidebar.propTypes = {
  provinceData: PropTypes.array.isRequired
}
export default Sidebar