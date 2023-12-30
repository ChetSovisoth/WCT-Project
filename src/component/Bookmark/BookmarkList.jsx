import { useEffect, useState } from "react";
import Content from '../Content/Content';
import { useContext } from 'react';
import { LanguageContext } from '../../App';

const BookmarkList = () => {
  const language = useContext(LanguageContext);
  const [bookmarkedItems, setBookmarkedItems] = useState([]);
  useEffect(() =>  {
      const items = [];
  
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith("bookmarked_")) {
          // Parse the JSON value and add it to the array
          const item = JSON.parse(localStorage.getItem(key));
          items.push(item);
        }
      }
      setBookmarkedItems(items);
    }, []);
  return (
    <>
      <h2 className="ms-5 my-3">Bookmarks</h2>
      <p className={`lead ms-5 ${bookmarkedItems == 0 ? "" : "d-none"}`}>Bookmarks will be displayed here.</p>
      <div className='row'>
        {bookmarkedItems.map((items) => (
          <Content {...items[language]} key={items[language].id}/>
          ))}
      </div>
    </>
  )
}

export default BookmarkList