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
            로그아웃
        </div>
    );
};

export default LogOut;