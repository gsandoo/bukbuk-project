import React from "react";

function LogOut({logout, history}){
    const handleClick = ()=>{
        logout();
        history.push('/');
    }
    return(
        <div 
            className="login-btn"
            onClick={handleClick}>
            ๋ก๊ทธ์์
        </div>
    );
};

export default LogOut;