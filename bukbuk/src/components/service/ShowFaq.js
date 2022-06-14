import React from "react";
import '../../css files/service-faq.css';

function ShowFaq({faq}){
    return(
        <div className="faq-box flex">
            {faq.map(content=>{
                return (
                <div key ={content.service_category}>
                    <div className="faq-index">
                        {content.service_category}
                    </div>
                    <div className="faq-title">
                        {content.service_title}
                    </div>
                    <div className="faq-look">
                        {content.service_hit}
                    </div>
                </div>)
            })}
        </div>
    );
};

export default ShowFaq;
