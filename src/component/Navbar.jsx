import PropTypes from 'prop-types';

const Navbar = ({ language, onLanguageChange }) => {
    Navbar.propTypes = {
        language: PropTypes.string.isRequired,
        onLanguageChange: PropTypes.string.isRequired,
      };
    
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand mx-5" href="#"><strong>KomsanHub</strong></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mx-4" id="navbarNavDropdown">
                    <ul className="navbar-nav flex-grow-1 justify-content-end align-items-center">
                        <li className="nav-item mx-2">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#footer">Contact Us</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">Bookmarks</a>
                        </li>
                        <li className="nav-link mx-2">
                            <button type="button" className="btn btn-outline-secondary" id="current-language" onClick={() => onLanguageChange(language === 'English' ? 'Khmer' : 'English')}>
                                <i className="bi bi-globe2 me-2"></i>
                                <span id="language-text">{language}</span>
                            </button>
                        </li>
                        <li className="nav-link  mx-2">
                            <a className="nav-link" href="#">Sign In</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar