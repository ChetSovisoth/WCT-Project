import { useEffect, useState } from "react";
import { useContext } from 'react';
import { LanguageContext } from '../../App';
import SearchBar from "../Search/SearchBar";
import SearchResultsList from "../Search/SearchResultList";
import Content from "../Home/Content";

const BookmarkList = () => {
  const [results, setResults] = useState([]);
  const language = useContext(LanguageContext);
  const [bookmarkedItems, setBookmarkedItems] = useState([]);
  useEffect(() =>  {
    
      const items = [];
  
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith("bookmarked_")) {
          const item = JSON.parse(localStorage.getItem(key));
          items.push(item);
        }
      }
      setBookmarkedItems(items);
    }, []);
  return (
    <>
      <SearchBar setResults={setResults}/>
      {results && results.length > 0 && <SearchResultsList results={results} />}
      <h2 className="ms-5 my-3">{language === 'English' ? 'Bookmarks' : 'កំណត់ចំណាំ'}</h2>
      <p className={`lead ms-5 ${bookmarkedItems.length == 0 ? "" : "d-none"}`}>{language === 'English' ? 'Bookmarks will be displayed here.' : 'កំណត់ចំណាំនឹងត្រូវបានបង្ហាញនៅទីនេះ។'}</p>
      <div className='row'>
        {bookmarkedItems.map((items) => (
          <Content {...items[language]} key={items[language].id}/>
        ))}
      </div>
    </>
  )
}

export default BookmarkList