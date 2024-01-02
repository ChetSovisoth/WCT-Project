import { SearchResult } from "./SearchResult";
import "../../assets/style.css/home.css";
export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result.name} key={id} />;
      })}
    </div>
  );
  
};
