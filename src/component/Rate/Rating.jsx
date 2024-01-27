import { useState, useContext } from "react";
import { FaStar } from "react-icons/fa"
import PropTypes from 'prop-types';
import { LanguageContext } from '../../App.jsx';

const Rating = ({ contentId, onRatingChange }) => {
    const language = useContext(LanguageContext);
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
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">{language === 'English' ? "How was you experience here?": "តើបទពិសោធន៍អ្នកនៅទីនេះយ៉ាងដូចម្តេច?"}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
            <div className="modal-body">
                <p style={{width: "90%"}} className="mx-auto">{language === 'English' ? "Please feel free to share with us your experience about this place.": "សូមចូលរួមចែករំលែកបទពិសោធន៍របស់អ្នកអំពីកន្លែងនេះជាមួយពួកយើង។"}</p>
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
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                        {language === 'English' ? "Close": "បិទ"}
                    </button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => handleRatingClick(rating)}>
                        {language === 'English' ? `${rated ? "Rer" : "R"}ate` : `${rated ? "វាយតម្លៃម្តងទៀត" : "វាយតម្លៃ"}`}
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}
Rating.propTypes = {
    contentId: PropTypes.number.isRequired,
    onRatingChange: PropTypes.func,
}
export default Rating