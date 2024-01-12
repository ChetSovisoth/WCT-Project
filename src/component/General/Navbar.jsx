import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../../App.jsx';
const Navbar = ({ onLanguageChange }) => { 
    const language = useContext(LanguageContext);
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand mx-5 fw-bold fs-3" to='/'>KomsanHub</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mx-4" id="navbarNavDropdown">
                    <ul className="navbar-nav flex-grow-1 justify-content-end align-items-center">
                        <li className="nav-item mx-2">
                            <Link to='/' className="nav-link">{language === 'English' ? 'Home' : 'ទំព័រដើម'}</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to='/about' className="nav-link">{language === 'English' ? 'About Us' : 'អំពី​ពួក​យើង​'}</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to='/contact' className="nav-link">{language === 'English' ? 'Contact Us' : 'ទាក់ទងយើង​'}</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link to='/bookmark' className="nav-link">{language === 'English' ? 'Bookmarks' : 'កំណត់ចំណាំ'}</Link>
                        </li>
                        {/* big screen */}
                        <li className="nav-link mx-2 d-none d-lg-inline">
                            <button type="button" className="btn btn-outline-secondary" id="current-language" onClick={() => onLanguageChange(language === 'English' ? 'Khmer' : 'English')}>
                                <i className="bi bi-globe2 me-2"></i>
                                <span id="language-text">{language === 'English' ? 'English' : 'ខ្មែរ'}</span>
                            </button>
                        </li>
                        {/* small screen */}
                        <li className="nav-link mx-2 d-lg-none">
                            <button type="button" className="btn border-0 text-secondary" id="current-language" onClick={() => onLanguageChange(language === 'English' ? 'Khmer' : 'English')}>
                                <i className="bi bi-globe2 me-2"></i>
                                <span id="language-text">{language === 'English' ? 'English' : 'ខ្មែរ'}</span>
                            </button>
                        </li>
                        <li className="nav-link  mx-2">
                            <Link to='/signin' className="nav-link">{language === 'English' ? 'Sign In' : 'ចូលគណនី'}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
Navbar.propTypes = {
    onLanguageChange: PropTypes.func.isRequired
};

export default Navbar