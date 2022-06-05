import React, { useEffect, useState } from "react";
import { bookSearch } from "./api";
import Item from "./Item";
import "./test.css";



const Test = props => {
  const [books, setBooks] = useState([]);
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.length > 0) {
      bookSearchHttpHandler(query, true);
    }
  }, [query]);

  // 엔터를 눌렀을 때 호출 되는 함수
  const onEnter = e => {
    if (e.keyCode === 13) {
      setQuery(text);
    }
  };
  const onClick = () =>{
    setQuery(text);
  }

  // text 검색어가 바뀔 때 호출되는 함수.
  const onTextUpdate = e => {
    setText(e.target.value);
  };

  const bookSearchHttpHandler = async (query, reset) => {
    const params = {
      query: query,
      sort: "accuracy", // accuracy | recency 정확도 or 최신
      page: 1, // 페이지번호
      size: 21 // 한 페이지에 보여 질 문서의 개수
    };


    // 책의 정보
    const { data } = await bookSearch(params);
    if (reset) {
      setBooks(data.documents); //책 정보들이 콘솔창에 띄워짐.
    } else {
      setBooks(books.concat(data.documents));
    }
  };

  return (
    <>
    <div className="container">
      <input
        type="search"
        placeholder="검색어를 입력 하세요..."
        name="query"
        className="input_search"
        onKeyDown={onEnter} // enter
        onChange={onTextUpdate} // change
        value={text} // view
      />
      <button onClick={onClick}>검색</button>
    </div>
    <ul>
        {books.map((book, index) => (
          <Item
            key={index}
            thumbnail={book.thumbnail}
            title={book.title}
            blogname={book.blogname}
            contents={book.contents}
            url={book.url}
            authors ={book.authors}
          />
        ))}
      </ul>
    </>
  );
};
export default Test;