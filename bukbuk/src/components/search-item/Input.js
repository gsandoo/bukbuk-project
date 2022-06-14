import React, { useEffect, useState } from "react";
import { bookSearch } from "./api";
import "../../css files/Input.css";

const Input = props => {
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
      size: 20 // 한 페이지에 보여 질 문서의 개수
    };


    // 책의 정보
    const { data } = await bookSearch(params);
    if (reset) {
      setBooks(data.documents); //책 정보들이 콘솔창에 띄워짐.
    } else {
      setBooks(books.concat(data.documents));
    }
  };
  // console.log(books);
  return (
    <>
    <div className="search-type">
        <input 
        type="search" 
        name="query" 
        placeholder="도서명 / isbn 검색" 
        className="input-search"
        onKeyDown={onEnter}
        onChange={onTextUpdate}
        value={text}
        />
      </div>
    <div className="search-btn">
        <button 
        type="search"
        onClick={onClick}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxsZsjY46D3whfdkqeE3BvzAKy61374wBUGw&usqp=CAU" alt="search-btn" />
        </button>
    </div>
    </>
  );
};
export default Input;