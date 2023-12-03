function Footer() {
  return (
    <div id="footer" className='container-fluid bg-light m-0 p-0'>
        <div className='row g-0 text-center'>
            <div className='col-md-4 '>
                <p className="lead mt-3">Location</p>
                <p className='m-0'>Sras Chak, Duan Penh</p>
                <p>Phnom Penh, Cambodia</p>
            </div>
            <div className='col-md-4 mt-3'>
                <p className="lead">Contact Us</p>
                <p className='m-0'>Chet.sovisoth@gmail.com</p>
                <p className="m-0">Sak.vicham@gmail.com</p>
                <p className="mb-3">Thy.chamroeunpiseth@gmail.com</p>
            </div>
            <div className='col-md-4 mt-3'>
                <p className="lead">Social Media</p>
                <a href="https://www.facebook.com/sovisoth.chet/">
                    <i className="bi bi-facebook mx-3 fs-2"></i>
                </a>
                <i className="bi bi-instagram mx-3 fs-2"></i>
                <i className="bi bi-twitter-x mx-3 fs-2"></i>
                <i className="bi bi-github mx-3 fs-2"></i>         
            </div>
        </div>
    </div>
  )
}

export default Footer