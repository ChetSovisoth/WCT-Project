import { FaStar } from "react-icons/fa"
import PropTypes from "prop-types"
const Rated = ({ rating }) => {
    console.log(rating)
  return (
    <>
        <FaStar 
            color={1 <= rating ? "#FFC107" : "#E4E5E9"} 
        />
        <FaStar 
            color={2 <= rating ? "#FFC107" : "#E4E5E9"} 
        />
        <FaStar 
            color={3 <= rating ? "#FFC107" : "#E4E5E9"} 
        />
        <FaStar 
            color={4 <= rating ? "#FFC107" : "#E4E5E9"} 
        />
        <FaStar 
            color={5 <= rating ? "#FFC107" : "#E4E5E9"} 
        />
    </>
  )
}
Rated.propTypes = {
    rating: PropTypes.number
}
export default Rated