import Navbar from './component/General/Navbar.jsx'
import SearchBar from './component/Search/SearchBar.jsx';
import MainContent from './component/Content/MainContent.jsx';
import Footer from './component/General/Footer.jsx';
//import Bookmark from './component/Bookmark/Bookmark.jsx';
import SearchResultsList from "./component/Search/SearchResultList.jsx";
import { useState } from 'react';

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
      <MainContent language={language}/>
      {/* <Bookmark language={language}/> */}
      <Footer />
    </>
  );
}

export default App