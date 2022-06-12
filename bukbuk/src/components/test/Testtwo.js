import React from "react";

function Testtwo({users}){
    return(
        <div>
            {users.map(user=>{
                return (<div key ={user.id}>
                    {user.name}
                    </div>)
            })}
        </div>
    );
};

export default Testtwo;

