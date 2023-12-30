import PropTypes from 'prop-types';
import Rating from '../Rate/Rating';
import Rated from '../Rate/Rated';
import api from "../../assets/api"
import { useDispatch, useSelector } from 'react-redux';
import { toggleBookmark, setRating } from '../../redux/slice';

const Content = (props) => {
  const {attractionPlace, imgSrc, tag, description, map, id } = props;
  const dispatch = useDispatch();
  const isBookmarked = useSelector((state) => state.bookmarks[id]?.isBookmarked || false);
  const rating = useSelector((state) => state.bookmarks[id]?.rating || 0);

  const handleBookmarkClick = () => {
    const English = api.English.phnomPenh[id - 1];
    const Khmer = api.Khmer.phnomPenh[id - 1];
    dispatch(toggleBookmark({English, Khmer, id}));
  };

  const handleRatingChange = (ratingValue) => {
    dispatch(setRating({ id, ratingValue }));
  };
  return (
    <>
      <div className='col-12 col-md-6 col-xl-4 col-xxxl-3 d-flex justify-content-center g-2 mb-5'>
        <div className="card pb-0 mx-auto position-relative" style={{ minWidth: "230px", maxWidth: "350px" }}>
          <img src={imgSrc} className="card-img-top" alt={attractionPlace} style={{ width: "100%", height: "190px" }} />
          <button
            className={`btn position-absolute top-0 end-0 bg-white rounded-5 ${isBookmarked ? 'text-danger' : ''}`}
            style={{ fontSize: "1.5rem" }}
            onClick={handleBookmarkClick}
          >
          <i className={`bi bi-heart${isBookmarked ? '-fill' : ''}`}></i>
          </button>
          <div className="card-body">
            <h5 className="card-title">{attractionPlace}</h5>
            <small className="text-body-secondary">{tag}</small>
            <p className="card-text overflow-y-auto" style={{ height: "100px" }}>{description}</p>
            <div className='d-flex align-items-center'>
              <div className='jusifty-content-start flex-grow-1'>
                <Rated rating={rating} contentId={id}/>
              </div>
              <div className="btn-group rounded mt-1">
                <a href={map} className="btn btn-outline-primary rounded-start" target="_blank" rel="noopener noreferrer">Map</a>
                <a className="btn btn-outline-primary rounded-end" data-bs-toggle="modal" data-bs-target={`#rate-modal-${id}`}>Rate</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id={`rate-modal-${id}`} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="rateModal" aria-hidden="true">
        <Rating contentId={id} onRatingChange={handleRatingChange} />
      </div>
    </>
  )
}

//Props-types validations
Content.propTypes = {
  attractionPlace: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  map: PropTypes.string.isRequired,
};

export default Content