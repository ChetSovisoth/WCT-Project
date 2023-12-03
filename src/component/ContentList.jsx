import Content from "./Content"
//import data from "../assets/data"
import api from "../assets/api"

const ContentList = () => {
  const attractions = api.English.phnomPenh;
  return (
    <div>
        {/* <div className="row">
            {data.map((items) => (
              <Content {...items} key={items.id}/>
            ))}
        </div> */}
        <div className="row">
            {attractions.map((items) => (
              <Content {...items} key={items.id}/>
            ))}
        </div>
    </div>
  )
}

export default ContentList