import { Route, Routes } from 'react-router-dom';
import { useState, createContext, useEffect } from 'react';
import Footer from './component/General/Footer.jsx';
import About from './component/General/About.jsx';
import Home from './component/Home/Home.jsx';
import Navbar from './component/General/Navbar.jsx';
import Contact from './component/General/Contact.jsx';

import MainContent from './component/Content/MainContent.jsx';
import Bookmark from './component/Bookmark/BookmarkList.jsx';
import Page404 from './component/General/Page404.jsx';

export const LanguageContext = createContext("English");
export const ProvinceData = createContext({});
function App() {
  const [provinceData, setProvinceData] = useState();
  const [results, setResults] = useState([]);
  const [language, setLanguage] = useState('English');
  const handleLanguageChange = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'English' ? 'Khmer' : 'English'));
  };
  useEffect(() => {
    fetch("https://province-api-sxzb.onrender.com/provincesData")
    .then((response) => response.json())
    .then((json) => {
      setProvinceData(json)
    });
  }, []);
  const provinceList = [
    'Phnom Penh', 'Siem Reap', 'Kandal', 'Takeo', 'Prey Veng', 
    'Svay Rieng', 'Kampot', 'Kep', 'Sihanoukville', 'Koh Kong', 'Kampong Speu', 
    'Pursat', 'Battambang', 'Pailin', 'Kampong Chnang', 'Kampong Cham', 'Tbong Khmum', 
    'Kratie', 'Kampong Thom', 'Mondulkiri', 'Ratanakiri', 'Preah Vihear', 'Steung Treng', 'Oddar Meanchey', 'Banteay Meanchey'
  ];
  return (
    <>
      <LanguageContext.Provider value={language} >
        <Navbar onLanguageChange={handleLanguageChange}/>
          <ProvinceData.Provider value={provinceData}>
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
          </ProvinceData.Provider>
        <Footer />
      </LanguageContext.Provider>
    </>
  );
}

export default App