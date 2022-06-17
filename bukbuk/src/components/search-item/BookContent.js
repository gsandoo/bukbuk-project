import React from 'react';
import {Link} from 'react-router-dom';


function BookContent({item}){


    return(
        <div>
            {item&&item.map(content=>{
                return (
                <div key ={content.review_num}>
                    <div className="faq-index">
                        {content.review_id}
                    </div>
                    <div className="faq-title">
                        {content.book_title}
                    </div>
                    <div className="faq-title">
                        {content.review_date}
                    </div>
                </div>)
            })}
            <Link to={'/review-write'} >리뷰쓰기</Link>
        </div>
    );
};



export default BookContent;