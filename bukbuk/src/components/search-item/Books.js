import React, {useState ,  useEffect } from "react";

import Menu from "../navibar/Menu";
import '../../css files/book-description.css'
import axios from "axios";
import BookContent from './BookContent'

function Books(props){
const [text , setText] = useState([])
//    console.log(props)
    const searchParams = props.location.search
;
    const url = new URLSearchParams(searchParams);
    const bookTitle =url.get('book_title');
    console.log(bookTitle)





    //  받는 값
    useEffect(()=>{axios.get('http://localhost:8080/book', {params:{book_title: bookTitle}} )
        .then(res=>setText(res.data.review))
        .catch(console.log("에러"))
    },[bookTitle])
    return(
        <div>
         
           <Menu/> 
           <div id="description-main">
                <div className="book-title">{url.get('book_title')}
                <div>
                    <BookContent item = {text}/>
               </div>
            </div>
           </div>
        </div>
    );
};

export default Books;