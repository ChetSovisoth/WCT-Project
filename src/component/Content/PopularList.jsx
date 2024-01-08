//import Popular from "./Popular";
import {  useEffect } from 'react'
const PopularList = () => {
    //const [ratedItem, setRatedItem] = useState([]);
    useEffect(() =>  {
      const items = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("rating_")) {
          const item = JSON.parse(localStorage.getItem(key));
          items.push(item);
        }
      }
      //setRatedItem(items);
    }, []);
    //console.log(ratedItem)
  return (
    <div>
        
    </div>
  )
}

export default PopularList