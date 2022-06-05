import React from "react";
import { bookSearch } from "./Search";


function Search(){
    return(
        <div className="container">
      <input
        type="search"
        placeholder="검색어를 입력 하세요..."
        name="query"
        className="input_search"
        onKeyDown={onEnter} // enter
        onChange={onTextUpdate} // change
        // value={text} // view
      />
      <button onClick={onClick}>검색</button>
      </div>
    );
};

export default Search;

