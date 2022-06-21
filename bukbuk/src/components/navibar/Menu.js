import React from "react";
import { Link } from "react-router-dom";
import '../../css files/menu.css';



function Menu(){
    return(
        <div id="menubar"
        className="flex">
            <div className="bestseller">
                <div className="bestseller-btn"><Link to={'/bestseller'}>베스트셀러</Link></div>
            </div>
            <div className="newbooks">
                <div className="newbooks-btn"><Link to={'/newbooks'}>신간도서</Link></div>
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

