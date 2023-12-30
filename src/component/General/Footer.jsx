import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../../App';
const Footer = () => {
    const language = useContext(LanguageContext);
  return (
    <div id="footer" className="bg-footer mb-0">
        <div className="row text-white mx-2">
            <div className="col-md-4">
                <h3 className="py-3 fw-bold">KomsanHub</h3>
                <p style={{maxWidth: "500px"}}>{language === 'English' ? "Royal University of Phnom Penh (Campus 1), Russian Federation Blvd (110), Touk Kork, Phnom Penh, Cambodia": "សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ (សាខាទី១), មហាវិថីសហព័ន្ធរុស្ស៊ី (១១០), ទួលគោក, រាជធានីភ្នំពេញ, កម្ពុជា"}</p>
            </div>
            <div className="col-md-4">
                <h3 className="py-3 fw-bold">{language === 'English' ? "Explore": "ស្វែងរក"}</h3>
                <Link to='/' className="nav-link">Home</Link>
                <Link to='/contact' className="nav-link">Contact Us</Link>
                <Link to='/about' className="nav-link">About Us</Link>
                <Link to='/bookmark' className="nav-link">Bookmarks</Link>
            </div>
            <div className="col-md-4">
                <h3 className="py-3">{language === 'English' ? "Follow Us": "តាម​ដានយើង"}</h3>
                <a href="https://www.facebook.com/komsanhub/" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook mx-3 fs-2 text-white"></i></a>
                <a href="https://t.me/VisothChet" target="_blank" rel="noopener noreferrer"><i className="bi bi-telegram mx-3 fs-2 text-white"></i></a>
                <a href="https://www.instagram.com/komsanhub/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram mx-3 fs-2 text-white"></i></a>         
                <a href="https://github.com/ChetSovisoth" target="_blank" rel="noopener noreferrer"><i className="bi bi-github mx-3 fs-2 text-white"></i></a>
            </div>
            <div className="pt-3 text-white">
                <h3>{language === 'English' ? "Contact Us": "ទាក់ទងយើង"}</h3>
                <p className="mb-1 lead">{language === 'English' ? "Email": "អ៊ីមែល"}: customer_support@komsanhub.com</p>
                <p className="mb-1 lead">{language === 'English' ? "Tel": "ទូរស័ព្ទ"}: +855 96 311 8521</p>
            </div>
            <hr className="border-2 mx-2"/>
            <p className="text-center">Copyright &#64; KomsanHub {new Date().getFullYear()}</p>
        </div>
    </div>
  )
}
export default Footer