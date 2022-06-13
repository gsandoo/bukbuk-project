import React from "react";
import '../../css files/service-faq.css';

function ShowFaq({content}){
    return(
        <div className="faq-box">
            {content.map(user=>{
                return (
                <div key ={user.id}>
                    {user.name}
                </div>)
            })}
        </div>
    );
};

export default ShowFaq;
