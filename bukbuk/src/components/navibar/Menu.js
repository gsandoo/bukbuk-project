import React from "react";
import '../../css files/menu.css';
function Menu(){
    return(
        <div id="menubar"
        className="flex">
            <div className="bestseller">
                <div className="bestseller-btn">베스트셀러</div>
            </div>
            <div className="newbooks">
                <div className="newbooks-btn">신간도서</div>
            </div>
            <div className="qna">
                <div className="qna-btn">게시판</div>
            </div>
            <div className="oldbooks">
                <div className="oldbooks-btn">중고서점</div>
            </div>
        </div>
    );
};

export default Menu;

