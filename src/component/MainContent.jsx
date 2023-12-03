import ContentList from "./ContentList"
import Sidebar from "./Sidebar"

const MainContent = () => {
  return (
      <div className="container-fluid p-0 row">
        <div className="col-xxl-2 container-lg-3">
          <Sidebar/>
        </div>
        <div className="col-xxl-10 container-lg-9">
          <ContentList/>
        </div>
      </div>
  )
}

export default MainContent