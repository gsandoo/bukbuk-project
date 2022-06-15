import React, { useEffect } from "react";
import Nav from "../navibar/Nav";
import Menu from "../navibar/Menu";
import '../../css files/book-description.css'
import axios from "axios";

function Books(props){
    console.log(props)
    const searchParams = props.location.search
;
    const url = new URLSearchParams(searchParams);    
    // 전송하고 받는 값
    useEffect(async()=>{
        await axios.get(''+ url)
        .then(res=>console.log(res))
    },[])
    return(
        <div>
           <Nav/>
           <Menu/> 
           <div id="description-main">
                <div className="book-title">{url.get('book_title')}</div>

           </div>
        </div>
    );
};

export default Books;

