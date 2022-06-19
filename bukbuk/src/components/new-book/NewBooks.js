import React, { useEffect, useState } from "react";
import { bookSearch} from "../search-item/api";
import "../../css files/Input.css";
import NewBookItem from "./NewBookItem";
import Nav from "../navibar/Nav";
import Menu from "../navibar/Menu";

const NewBooks = props => {
  const [books, setBooks] = useState([]);
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.length > 0) {
      bookSearchHttpHandler(query, true);
    }
  }, [query]);


  // 신간도서 코드
  // useEffect(() => {
  //   if (query.length > 0) {
  //     recentBookHttpHandler(query, true);
  //   }
  // }, [query]);


  const onEnter = e => {
    if (e.keyCode === 13)  {
      setQuery(text);
    }if (window.location.pathname !=='/'){
      alert('검색은 메인페이지를 이용하세요')
    }
  };
  const onClick = () =>{
    if(window.location.pathname === '/'){
      setQuery(text)
    }else{
      alert("검색은 메인페이지를 이용하세요")
    }
  }

  // text 검색어가 바뀔 때 호출되는 함수.
  const onTextUpdate = e => {
    setText(e.target.value);
  };

  const bookSearchHttpHandler = async (query, reset) => {
    const params = {
      query: query,
      sort: 'recency', // accuracy | recency 정확도 or 최신
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


  // 신간도서 코드
//   const recentBookHttpHandler = async  (query, reset) => {
//     const params = {
//       query: query,
//       sort: 'accuracy', // accuracy | recency 정확도 or 최신
//       page: 1, // 페이지번호
//       size: 20 // 한 페이지에 보여 질 문서의 개수
//     };

//   // const { data } = await recentBook(params);
//   // if (reset) {
//   //   setBooks(data.documents); //책 정보들이 콘솔창에 띄워짐.
//   // } else {
//   //   setBooks(books.concat(data.documents));
//   // }
// };
  // console.log(window.location.pathname)
  // console.log(books);
  
  return (
    <>
    <Nav/>
    <Menu/>
    <div>
        <ul className="item-box">
            {books.map((book, index) => (
        <NewBookItem
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
    </div>
    </>
  );
};
export default NewBooks;
