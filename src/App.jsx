import SearchBar from './component/Search/SearchBar.jsx';
import MainContent from './component/Content/MainContent.jsx';
import { Route, Routes } from 'react-router-dom';
import SearchResultsList from "./component/Search/SearchResultList.jsx";
import { useState } from 'react';
import Bookmark from './component/Bookmark/BookmarkContent.jsx';
import Footer from './component/General/Footer.jsx';
import About from './component/General/About.jsx';
import Home from './component/General/Home.jsx';
import Navbar from './component/General/Navbar.jsx'
import Contact from './component/General/Contact.jsx';

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
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<MainContent language={language}/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App