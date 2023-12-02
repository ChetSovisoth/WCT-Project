import Content from "./Content"
import data from "./assets/data"

const ContentList = () => {

  return (
    <div>
        <div className="row">
            {data.map((items) => (
                    <Content {...items} key={items.id}/>
            ))}
        </div>
    </div>
  )
}

export default ContentList