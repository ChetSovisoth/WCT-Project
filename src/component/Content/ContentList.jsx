import Content from "./Content"
import api from "../../assets/api"
import { useContext } from 'react';
import { LanguageContext } from '../../App';

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