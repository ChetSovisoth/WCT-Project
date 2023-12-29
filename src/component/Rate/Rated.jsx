import { FaStar } from "react-icons/fa"
import PropTypes from "prop-types"

const Rated = ({ rating }) => {
  const rated = rating;
  console.log(rated)
  return (
    <>   
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar key={index} color={index + 1 <= rated ? "#FFC107" : "#E4E5E9"} />
      ))}
    </>
  )
}
Rated.propTypes = {
  rating: PropTypes.number
}
export default Rated