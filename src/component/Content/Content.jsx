import { useState } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import Bookmark from '../Bookmark/Bookmark';

const Content = (props) => {
  const [isBookmarked, setBookmarked] = useState(false);
  const {attractionPlace, imgSrc, tag, description, map} = props;
  
  const handleBookmarkClick = () => {
    setBookmarked(!isBookmarked);
  };
  return (
    <>
      {/* Horizontal Card */}
      <div className="col-xxxxl-4 col-lg-12 d-flex justify-content-center mb-5 d-none d-xl-none d-xl-none d-lg-inline d-xxxxl-inline">
        <div className="card mx-auto mb-4 border-0 shadow p-2 pe-1 bg-body-tertiary rounded" style={{ maxWidth: "580px"}}>
          <div className="row g-0 position-relative">
            <div className="col-md-5 position-relative">
              <img
                src={imgSrc}
                className="img-fluid rounded"
                alt={attractionPlace}
                style={{ height: "100%", width: "100%" }}
              />
              <Bookmark onBookmarkClick={handleBookmarkClick} isBookmarked={isBookmarked} />
            </div>
            <div className="col-md-7">
              <div className="card-body p-2 ms-2">
                <div className='d-flex'>
                  <h5 className="card-title mb-1 flex-grow-1" style={{ width: "200px"}}>{attractionPlace}</h5>
                  <div className='justify-content-end' style={{fontSize: "1rem"}}>
                    <i className='bi bi-star'></i>
                    <i className='bi bi-star'></i>
                    <i className='bi bi-star'></i>
                    <i className='bi bi-star'></i>
                    <i className='bi bi-star'></i>
                  </div>
                </div>
                <p className="card-text mb-1">
                  <small className="text-body-secondary">{tag}</small>
                </p>
                <p className="card-text overflow-y-auto" style={{ height: "80px" }}>{description}</p>
                <div className="btn-group float-end">
                  <a href={map} className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">Map</a>
                  <a className="btn btn-outline-primary rounded-end-1 " data-bs-toggle="modal" data-bs-target="#rate-modal">Rate</a>
                  <div className="modal fade" id="rate-modal" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <Rating />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Card */}
      <div className='col-12 col-sm-12 col-md-6 col-xl-4 col-xxxl-3 d-flex justify-content-center g-2 mb-5 d-xl-inline d-lg-none d-xxxxl-none'>
        <div className="card pb-0 mx-auto position-relative" style={{ minWidth: "230px", maxWidth: "350px" }}>
          <img src={imgSrc} className="card-img-top" alt={attractionPlace} style={{ width: "100%", height: "190px" }} />
          <Bookmark onBookmarkClick={handleBookmarkClick} isBookmarked={isBookmarked} />
          <div className="card-body">
            <h5 className="card-title">{attractionPlace}</h5>
            <small className="text-body-secondary">{tag}</small>
            <p className="card-text overflow-y-auto" style={{ height: "100px" }}>{description}</p>
            <div className='d-flex align-items-center'>
              <div className='jusifty-content-start flex-grow-1'>
                  <i className='bi bi-star'></i>
                  <i className='bi bi-star'></i>
                  <i className='bi bi-star'></i>
                  <i className='bi bi-star'></i>
                  <i className='bi bi-star'></i>
              </div>
              <div className="btn-group rounded mt-1">
                <a href={map} className="btn btn-outline-primary rounded-start" target="_blank" rel="noopener noreferrer">Map</a>
                <a className="btn btn-outline-primary rounded-end" data-bs-toggle="modal" data-bs-target="#rate-modal">Rate</a>
                  <div className="modal fade" id="rate-modal" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="rateModal" aria-hidden="true">
                    <Rating />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

//Props-types validations
Content.propTypes = {
  attractionPlace: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  tag: PropTypes.string,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  map: PropTypes.string.isRequired,
};

export default Content