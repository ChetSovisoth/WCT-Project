import { useState } from "react";
import { FaStar } from "react-icons/fa"
import PropTypes from 'prop-types';
const Rating = ({ contentId, onRatingChange }) => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [rated, setRated] = useState(false);
    const handleRatingClick = (selectedRating) => {
        setRated(true)
        setRating(selectedRating);
        if (onRatingChange) {
            onRatingChange(selectedRating);
        }
    };
    return (
        <>
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">How was you experience here?</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <p className='w-75'>Please feel free to share with us your experience about this place.</p>
                <div className='text-center' style={{fontSize: "1.5rem"}}>
                    {[...Array(5)].map((_, i) => {
                        const ratingValue = i + 1;
                        const starKey = `star-${i}`;
                        return (
                            <label key={starKey}>
                                <input
                                 type="radio" 
                                 value={ratingValue} 
                                 name={`rating-${contentId}`}
                                 className="d-none" 
                                 onClick={() => setRating(ratingValue)}
                                 />
                                <FaStar 
                                 color={ratingValue <= (hover || rating) ? "#FFC107" : "#E4E5E9"} 
                                 className="fs-1"
                                 onMouseEnter={() => setHover(ratingValue)}
                                 onMouseLeave={() => setHover(null)}
                                 />
                            </label>
                        )
                    })}
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => handleRatingClick(rating)}>
                    {`${rated ? "Rer" : "R"}ate`}
                </button>
            </div>
            </div>
        </div>
    </>
  )
}
Rating.propTypes = {
    contentId: PropTypes.number.isRequired,
    onRatingChange: PropTypes.func
}
export default Rating