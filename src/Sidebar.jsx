const Sidebar = () => {
  return (
      <div className="col-lg-2">
        <div className="sticky-top">
          <div className="mt-2 ms-2">
          <iframe
            title="My Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250151.42198261587!2d104.89018675!3d11.57936425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1701539956948!5m2!1sen!2skh"
            width={300}
            height={300}
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded"
          ></iframe>
          </div>
        </div>
      </div>
  )
}

export default Sidebar