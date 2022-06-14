import React from "react";
import '../../css files/test.css'

function Testtwo({content}){
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

export default Testtwo;

