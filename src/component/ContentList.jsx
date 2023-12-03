import Content from "./Content"
import api from "../assets/api"

// eslint-disable-next-line react/prop-types
const ContentList = ({ language }) => {
  const attractions = api[language].phnomPenh;
  return (
    <div>
        <div className="row">
            {attractions.map((items) => (
              <Content {...items} key={items.id}/>
            ))}
        </div>
    </div>
  )
}

export default ContentList