import React from "react";
import '../../css files/nav.css';
import {Link} from 'react-router-dom';
import Input from "../search-item/Input";


function Nav(){
    return(
        <>
        <div id="navibar" className="nav-flex">
            <div className="nav-left">
                <div className="icon">
                    <Link to={'/'}><img src="https://i.pinimg.com/736x/e5/99/a8/e599a837c7838a6da566c099c88ac3dd.jpg" alt="icon" className="title-icon" /></Link>
                </div>
                <div className="title">
                    BUKBUK
                </div>
            </div>
            <div className="search">
                <div className="search-type">
                <Input/>
                </div>
            </div>
            <div className="tab">
                <div className="login">
                    <div className="login-btn"><Link to={'/Login'}>로그인</Link></div>
                </div>
                <div className="new-member">
                    <div className="new-member-btn"><Link to={'/New-member'}>회원가입</Link></div>
                </div>
                <div className="help">
                    <div className="service-btn"><Link to={'/Service'}>고객센터</Link></div>
                </div>
            </div>
        </div>
        </>
    );
}; 

export default Nav;
