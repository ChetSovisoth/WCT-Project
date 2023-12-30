import ContentList from "./ContentList.jsx"
import DisplaySidebar from "./DisplaySidebar.jsx"

const MainContent = () => {
  return (
    <div className="container-fluid p-0 row mt-3 mx-0">
        <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3 col-xxxl-2 d-sm-inline d-flex justify-content-center flex-column">
          <DisplaySidebar />
        </div>
        <div className="col-sm-6 col-md-7 col-lg-8 col-xl-9 col-xxxl-10">
          <ContentList />
        </div>
      </div>
  )
}

export default MainContent