import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Footer from './component/General/Footer.jsx';
import About from './component/General/About.jsx';
import Home from './component/General/Home.jsx';
import Navbar from './component/General/Navbar.jsx';
import Contact from './component/General/Contact.jsx';
import SearchBar from './component/Search/SearchBar.jsx';
import SearchResultsList from "./component/Search/SearchResultList.jsx";
import MainContent from './component/Content/MainContent.jsx';
import Bookmark from './component/Bookmark/BookmarkList.jsx';

function App() {
  const [results, setResults] = useState([]);
  const [language, setLanguage] = useState('English');
  const handleLanguageChange = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'English' ? 'Khmer' : 'English'));
  };
  return (
    <>
      <Navbar language={language} onLanguageChange={handleLanguageChange}/>
      <SearchBar setResults={setResults}/>
      {results && results.length > 0 && <SearchResultsList results={results} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/bookmark" element={<Bookmark language={language}/>} />
        <Route path="/contact" element={<Contact language={language}/>} />
        <Route path="/signin" element={<MainContent language={language}/>} />
      </Routes>
      <Footer language={language}/>
    </>
  );
}

export default App