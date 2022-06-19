import React, {useEffect , useState} from "react";
import { Link } from "react-router-dom";
import '../../css files/menu.css';
import Item from "../search-item/Item";
import {bookSearch} from '../search-item/api';



function Menu(props){
    const [books, setBooks] = useState([]);
    const [text, setText] = useState("");
    const [query, setQuery] = useState("");
  
    useEffect(() => {
      if (query.length > 0) {
        bookSearchHttpHandler(query, true);
      }
    }, [query]);

    // 신간도서 클릭 시 
    const onClick = () =>{
          setQuery(text)
      };

    const bookSearchHttpHandler = async (query, reset) => {
    const params = {
        query: query,
        sort: 'accuracy', // accuracy | recency 정확도 or 최신
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
        <div id="menubar"
        className="flex">
            <div className="bestseller">
                <div className="bestseller-btn"><Link to={'/bestseller'}>베스트셀러</Link></div>
            </div>
            <div className="newbooks">
                <div className="newbooks-btn"><Link to={'/newbooks'}onClick={onClick}>신간도서</Link></div>
            </div>
            <div className="qna">
                <div className="qna-btn"><Link to={'/talk'}>게시판</Link></div>
            </div>
            <div className="oldbooks">
                <div className="oldbooks-btn"><Link to={'/oldbooks'}>중고서점</Link></div>
            </div>
        </div>
    );
};

export default Menu;

