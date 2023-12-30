import { Link } from "react-router-dom"
import { useContext } from 'react';
import { LanguageContext } from '../../App.jsx';
const Page404 = () => {
    const language = useContext(LanguageContext);
    const image = "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/MayKishon/c9a31fc5-9a6a-4a66-a874-ebb37a4159f0_404.png";
  return (
    <div 
        style={{
            backgroundImage: `url(${image})`, 
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: "600px"
        }}
        className="d-flex flex-column align-items-center justify-content-center ">
        <h1 className="fw-bold text-center mx-3">{language === 'English' ? "That page does not exist!": "ទំព័រនេះមិនមានទេ!"}</h1>
        <p className="lead text-center mx-4">{language === 'English' ? "Sorry, what you were looking for could not be found.": "សូមអភ័យទោស យើងរកមិនឃើញអ្វីដែលអ្នកកំពុងស្វែងរកទេ។"}</p>
        <Link to="/" className="nav-link">{language === 'English' ? "Return to ": "ត្រលប់​ទៅ "}<span className="text-decoration-underline">Homepage</span></Link>
    </div>
  )
}
export default Page404