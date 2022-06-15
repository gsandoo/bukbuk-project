import React from "react";
import Nav from "../navibar/Nav";
import Menu from "../navibar/Menu";
import '../../css files/book-description.css'

function Books(props){
    console.log(props)
    return(
        <div>
           <Nav/>
           <Menu/> 
           <div id="description-main">
                <div className="book-title">{props.title} </div>

           </div>
        </div>
    );
};

export default Books;

