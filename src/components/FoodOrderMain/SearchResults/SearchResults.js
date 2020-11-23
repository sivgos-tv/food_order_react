import React from "react";
import search_data from "./SearchResultsData.js";
import SearchElements from "./SearchElements/SearchElements";
import SearchCategory from "./SearchCategory/SearchCategory"
function SearchResults(props) {
  return (
    <div>
    <SearchCategory />
    <div className="container">
      <div className="row">
          {search_data.map((element) => {
          return (
          <div class="col-md-4 mb-5">
              <SearchElements 
              key = {element.key}
              name={element.Name}
              img_url={element.img_url}
              price={element.Price}
              n_dish={10}
              rating={element.Rating}
              n_reviewers={element.Num_Reviews}
              />
            </div>);
          })}
      </div>
    </div>
    </div>
  );
}


export default SearchResults;
