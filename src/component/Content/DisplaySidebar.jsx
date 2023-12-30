import Sidebar from './Sidebar'

const DisplaySidebar = () => {
  return (
    <>
      {/*  Offcanvas shows when screensize below sm  */}
      <div className='d-flex justify-content-center d-sm-none'>
        <button className="btn btn-lg btn-outline-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">Display City Informations</button>
        <div className="offcanvas-lg offcanvas-end" tabIndex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
          <div className="offcanvas-header">
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <Sidebar />
          </div>
        </div>
      </div>
      {/* Shows above md */}
      <div className='d-none d-sm-inline'>
        <Sidebar />
      </div>

    </>
  )
}

export default DisplaySidebar