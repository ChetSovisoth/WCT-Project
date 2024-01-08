import { Route, Routes } from 'react-router-dom';
import { useState, createContext } from 'react';
import Footer from './component/General/Footer.jsx';
import About from './component/General/About.jsx';
import Home from './component/General/Home.jsx';
import Navbar from './component/General/Navbar.jsx';
import Contact from './component/General/Contact.jsx';
import SearchBar from './component/Search/SearchBar.jsx';
import SearchResultsList from "./component/Search/SearchResultList.jsx";
import MainContent from './component/Content/MainContent.jsx';
import Bookmark from './component/Bookmark/BookmarkList.jsx';
import Page404 from './component/General/Page404.jsx';
import SignIn from './component/Auth/SignIn.jsx';
import SignUp from './component/Auth/SignUp.jsx';

export const LanguageContext = createContext("English");

function App() {
  const [results, setResults] = useState([]);
  const [language, setLanguage] = useState('English');
  const handleLanguageChange = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'English' ? 'Khmer' : 'English'));
  };
  const provinceList = [
    'Phnom Penh', 'Siem Reap', 'Kandal', 'Takeo', 'Prey Veng', 
    'Svay Rieng', 'Kompot', 'Kep', 'Sihanoukville', 'Koh Kong', 'Kompong Speu', 
    'Pursat', 'Battambang', 'Pailin', 'Kampong Chhnang', 'Kampong Cham', 'Tbong Khmum', 
    'Kratie', 'Kampong Thom', 'Mondulkiri', 'Ratanakiri', 'Preah Vihear', 'Steung Treng', 'Oddar Meanchey', 'Banteay Meanchey'
  ];
  return (
    <>
      <LanguageContext.Provider value={language} >
        <Navbar onLanguageChange={handleLanguageChange}/>
        <SearchBar setResults={setResults}/>
        {results && results.length > 0 && <SearchResultsList results={results} />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/bookmark" element={<Bookmark />} />
            <Route path="/contact" element={<Contact />} />
            {provinceList.map((province) => 
              <Route path={province.toLowerCase()} key={province} element={<MainContent />}/>
            )}
            <Route path="*" element={<Page404 />}/>
          </Routes>
        <Footer />
      </LanguageContext.Provider>
    </>
  );
}

export default App