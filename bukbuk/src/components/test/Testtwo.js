import React from "react";
import '../../css files/test.css'

function Testtwo({users}){
    return(
        <div className="yellowbox">
            {users.map(user=>{
                return (<div key ={user.id}>
                    {user.name}
                    </div>)
            })}
        </div>
    );
};

export default Testtwo;

