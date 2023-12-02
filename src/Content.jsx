import { useState } from 'react';

function Content(props) {
  // eslint-disable-next-line react/prop-types
  const {attractionPlace, imgSrc, tag, description} = props;
  const [isBookmarked, setBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    // Toggle the bookmark state
    setBookmarked(!isBookmarked);
  };
  return (
      <div className="col-lg-4">
        <div className="card mb-4 border-0 shadow p-3 bg-body-tertiary rounded" style={{ maxWidth: "540px" }}>
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