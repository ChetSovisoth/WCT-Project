import api from "../assets/api"
// eslint-disable-next-line react/prop-types
const Sidebar = ({ language }) => {
  return (
     
    <div className="mt-2 ms-2">
     <iframe
        title="My Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250151.42198261587!2d104.89018675!3d11.57936425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh!5e0!3m2!1sen!2skh"
        width={300}
        height={300}
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="shadow bg-body-tertiary rounded mt-2 ms-2"
      ></iframe>

      <p className="p-3 fs-3 mb-2 lead fw-bold">{api[language].city}</p>
      <div className="card mb-3 bg-light border-0 " style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">{api[language].intro}</h5>
          <div className="rounded bg-white shadow bg-body-tertiary my-4">
            <p className="card-text p-3">{api[language].description}</p>
          </div>
          <img className="img-fluid rounded mb-3" src={api[language].cityPicture} alt="Picture of City" />
        </div>
      </div>
      <div className="container p-3">
        <button className="btn btn-outline-black border-3 border-black w-100 mb-2">Restaurants</button>
        <button className="btn btn-outline-black border-3 border-black w-100 mb-2">Accomadations</button>
      </div>
    </div>
  )
}

export default Sidebar