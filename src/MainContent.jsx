import ContentList from "./ContentList"
import Sidebar from "./Sidebar"

const MainContent = () => {
  return (
      <div className="container-fluid p-0 row">
        <div className="col-lg-2">
          <Sidebar/>
        </div>
        <div className="col-lg-10">
          <ContentList/>
        </div>
      </div>
  )
}

export default MainContent