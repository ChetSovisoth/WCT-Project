
const Rating = () => {
  return (
    <>
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">How was you experience here?</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <p className='w-75'>Please feel free to share with us your experience about this place.</p>
                <div className='text-center' style={{fontSize: "1.5rem"}}>
                <i className='bi bi-star mx-2'></i>
                <i className='bi bi-star mx-2'></i>
                <i className='bi bi-star mx-2'></i>
                <i className='bi bi-star mx-2'></i>
                <i className='bi bi-star mx-2'></i>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Rate</button>
            </div>
            </div>
        </div>
    </>
  )
}

export default Rating