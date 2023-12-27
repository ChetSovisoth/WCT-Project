import PropTypes from "prop-types"
const Contact = ({ language }) => {
  return (
    <>
      <div className="d-flex my-5">
        <div className="text-center mt-2 d-flex flex-column  flex-grow-1">
          <h2>{language === 'English' ? "Know a Better Place?": "ស្គាល់កន្លែងល្អជាងនេះ?"}</h2>
          <p className="lead">{language === 'English' ? "Let us Know": "អនុញ្ញាតឱ្យយើងដឹង"}</p>
          <div className="d-flex flex-column align-items-center">
            <input className="my-1 ms-5 w-50 rounded-3 border border-secondary" type="text" id="name" placeholder="Your Name" style={{padding: "8px"}}/>
            <input className="my-1 ms-5 w-50 rounded-3 border border-secondary" type="text" id="number" placeholder="Phone Number" style={{padding: "8px"}}/>
            <input className="my-1 ms-5 w-50 rounded-3 border border-secondary" type="text" id="location" placeholder="Location Name" style={{padding: "8px"}}/>
            <input className="my-1 ms-5 w-50 rounded-3 border border-secondary" type="text" id="locationMap" placeholder="Google Map Location" style={{padding: "8px"}}/>
            <button className="btn btn-outline-primary ms-5 mt-1 w-25" >Submit</button>
          </div>
        </div>
        <div className="flex-grow-1 d-flex align-items-center flex-column">
          <h2>{language === 'English' ? "Address": "អាសយដ្ឋាន"}</h2>
          <p style={{maxWidth: "400px"}} className="text-center lead">{language === 'English' ? "Royal University of Phnom Penh (Campus 1), Russian Federation Blvd (110), Touk Kork, Phnom Penh, Cambodia": "សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ (សាខាទី១), មហាវិថីសហព័ន្ធរុស្ស៊ី (១១០), ទួលគោក, រាជធានីភ្នំពេញ, កម្ពុជា"}</p>
          <p className="mb-1 lead">{language === 'English' ? "Email": "អ៊ីមែល"}: customer_support@komsanhub.com</p>
          <p className="mb-1 lead">{language === 'English' ? "Tel": "ទូរស័ព្ទ"}: +855 96 311 8521</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1954.3751648234734!2d104.8886622861028!3d11.56974769518536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fad8972b5%3A0xbdd878abfba713fd!2sRUPP%20STEM%20Building!5e0!3m2!1sen!2skh!4v1703235804740!5m2!1sen!2skh" 
            style={{border: 0, width: "400px", height: "200px"}}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex-grow-1">
          <h2 className="text-center mb-3">{language === 'English' ? "Social Media": "ប្រព័ន្ធ​​សង្គម"}</h2>
            <div className="d-flex justify-content-center">
              <a href="https://www.facebook.com/komsanhub/" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook mx-3 fs-2 text-primary"></i></a>
              <a href="https://t.me/VisothChet" target="_blank" rel="noopener noreferrer"><i className="bi bi-telegram mx-3 fs-2 text-black"></i></a>
              <a href="https://www.instagram.com/cs.soth/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram mx-3 fs-2" style={{color: "#bc2a8d"}}></i></a>         
              <a href="https://github.com/ChetSovisoth" target="_blank" rel="noopener noreferrer"><i className="bi bi-github mx-3 fs-2 text-black"></i></a>
            </div>
        </div>
      </div>
    </>
  )
}
Contact.propTypes = {
  language: PropTypes.string.isRequired
}
export default Contact