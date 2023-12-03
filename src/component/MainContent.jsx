import ContentList from "./ContentList"
import Sidebar from "./Sidebar"

// eslint-disable-next-line react/prop-types
const MainContent = ({language}) => {
  return (
      <div className="container-fluid p-0 row">
        <div className="col-xxl-2 container-lg-3">
          <Sidebar language={language}/>
        </div>
        <div className="col-xxl-10 container-lg-9">
          <ContentList language={language}/>
        </div>
      </div>
  )
}

export default MainContent