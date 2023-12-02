import Content from "./Content"
import data from "./assets/data"

const ContentList = () => {

  return (
    <div>
        {data.map((items) => (
        <Content {...items} key={items.id}/>
      ))}
    </div>
  )
}

export default ContentList