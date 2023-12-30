import Content from "./Content.jsx"
import api from "../../assets/api.json"
import { useContext } from 'react';
import { LanguageContext } from '../../App.jsx';

const ContentList = () => {
  const language = useContext(LanguageContext);
  const attractions = api[language].phnomPenh;
  return (
    <>
      <div className="row">
        {attractions.map((items) => (
          <Content {...items} key={items.id}/>
          ))}
      </div>
    </>
  )
}

export default ContentList