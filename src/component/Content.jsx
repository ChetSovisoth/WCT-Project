import { useState } from 'react';
import PropTypes from 'prop-types';


const Content = (props) => {
  const [isBookmarked, setBookmarked] = useState(false);
  const {attractionPlace, imgSrc, tag, description} = props;
  //Props-types validations
  Content.propTypes = {
    attractionPlace: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    tag: PropTypes.string,
    description: PropTypes.string.isRequired,
  };

  const handleBookmarkClick = () => {
    // Toggle the bookmark state
    setBookmarked(!isBookmarked);
  };
  return (
    <div className="col-xxl-4 col-lg-12 d-flex justify-content-center ">{/*changed maxWidth to width*/}
      <div className="card mb-4 border-0 shadow p-3 bg-body-tertiary rounded" style={{ width: "540px" }}>
        <div className="row g-0 position-relative">
          <div className="col-md-4 d-flex p-2">
            <img
              src={imgSrc}
              className="img-fluid rounded"
              alt="Royal Palace"
            />
            <button
              className={`btn position-absolute top-0 end-0 p-2 ${
                isBookmarked ? 'text-danger' : ''
              }`}
              style={{ fontSize: "1.5rem" }}
              onClick={handleBookmarkClick}>
              <i className={`bi bi-bookmark-heart ${isBookmarked ? 'fill' : ''}`}></i>
            </button>
          </div>
          <div className="col-md-8">
            <div className="card-body p-2">
              <h5 className="card-title mb-1">{attractionPlace}</h5>
              <p className="card-text mb-1">
                <small className="text-body-secondary">{tag}</small>
              </p>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Content