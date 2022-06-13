import React from "react";
import '../../css files/test.css'

function ShowFaq({content}){
    return(
        <div className="yellowbox">
            {content.map(user=>{
                return (<div key ={user.id}>
                    {user.name}
                    </div>)
            })}
        </div>
    );
};

export default ShowFaq;
