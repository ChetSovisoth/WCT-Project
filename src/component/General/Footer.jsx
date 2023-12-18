const Footer = () => {
  return (
    <div id="footer" className="bg-footer mb-0">
        <div className="row text-white mx-2 mb-3">
            <div className="col-4">
                <h3 className="py-3 fw-bold">KomsanHub</h3>
                <p style={{maxWidth: "500px"}}>Royal University of Phnom Penh (Campus 1), Russian Federation Blvd (110), Touk Kork, Phnom Penh, Cambodia</p>
            </div>
            <div className="col-4">
                <h3 className="py-3 fw-bold">Explore</h3>
                <p className="m-0"><a href="#" className="text-decoration-none text-white">Home</a></p>
                <p className="m-0"><a href="#" className="text-decoration-none text-white">About Us</a></p>
                <p className="m-0"><a href="#" className="text-decoration-none text-white">Bookmark</a></p>
            </div>
            <div className="col-4">
                <h3 className="py-3 ms-3">Follow Us</h3>
                <i className="bi bi-facebook mx-3 fs-2"></i>
                <i className="bi bi-telegram mx-3 fs-2"></i>
                <i className="bi bi-instagram mx-3 fs-2"></i>
                <i className="bi bi-twitter-x mx-3 fs-2"></i>
                <i className="bi bi-github mx-3 fs-2"></i>         
            </div>
            <div className="pt-3 text-white">
                <h3>Contact Us</h3>
                <p>Email: customer_support@komsanhub.com</p>
                <p>Tel: +855 96 311 8521</p>
            </div>
            <hr className="border-2"/>
            <p className="text-center">Copyright &#64; KomsanHub 2023</p>
        </div>
    </div>
  )
}

export default Footer