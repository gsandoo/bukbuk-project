import React,{useState} from "react";
import Item from "./Item";

function Itembox(){
    const [books, setBooks] = useState([]);
    return(
        <div>
            <ul className="item-box">
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
        </div>
    );
};

export default Itembox;

