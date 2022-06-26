import React, {useEffect , useState} from "react";

import Menu from "../navibar/Menu";
import NewBookItem from "./NewBookItem";
import {bookSearch} from '../search-item/api';
import Slide from "../slide/Slide";



function NewBooks(){
    const [books, setBooks] = useState([]); // 책 리스트
    const [text, setText] = useState(""); // 검색
    const [query, setQuery] = useState(""); // 값
  

    
    

    useEffect(()=>{
        setQuery("코딩")
    },[])

    useEffect(() => {
      if (query.length > 0) {
        bookSearchHttpHandler(query, true);
      }
    }, [query]);



    const bookSearchHttpHandler = async (query, reset) => {
    const params = {
        query: query,
        sort: 'latest', // accuracy | latest 정확도 or 최신
        page: 1, // 페이지번호
        size: 20 // 한 페이지에 보여 질 문서의 개수
    };

    // 책의 정보
    const { data } = await bookSearch(params);
    if (reset) {
      setBooks(data.documents); //책 정보.
    } else {
      setBooks(books.concat(data.documents));
    }
  };



    return(
       <>
      
       <Menu/>
       <Slide/>
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