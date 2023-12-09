import Navbar from './component/Navbar.jsx'
import SearchBar from './component/SearchBar.jsx';
import MainContent from './component/MainContent.jsx';
import Footer from './component/Footer.jsx';
//import Bookmark from './component/Bookmark.jsx';
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
      <Footer />
    </>
  );
}

export default App