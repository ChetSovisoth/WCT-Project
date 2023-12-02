import ContentList from "./ContentList"
import Sidebar from "./Sidebar"

const MainContent = () => {
  return (
    <div className="container-fluid d-flex p-0">
        <Sidebar/>
        <ContentList/>
    </div>
  )
}

export default MainContent