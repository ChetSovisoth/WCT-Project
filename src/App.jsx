import Navbar from './component/General/Navbar.jsx'
import SearchBar from './component/General/SearchBar.jsx';
import MainContent from './component/Content/MainContent.jsx';
import Footer from './component/General/Footer.jsx';
//import Bookmark from './component/Bookmark/Bookmark.jsx';
import { useState } from 'react';

function App() {
  const [language, setLanguage] = useState('English');
  const handleLanguageChange = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'English' ? 'Khmer' : 'English'));
  };
  return (
    <>
      <Navbar language={language} onLanguageChange={handleLanguageChange}/>
      <SearchBar />
      <MainContent language={language}/>
      {/* <Bookmark language={language}/> */}
      <Footer />
    </>
  );
}

export default App