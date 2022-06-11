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
                <Input/>
            </div>
            <div className="tab">
                <div className="login">
                    <Link to={'/login'}><div className="login-btn">로그인</div></Link>
                </div>
                <div className="new-member">
                   <Link to={'/new-member'}> <div className="new-member-btn">회원가입</div></Link>
                </div>
                <div className="help">
                    <Link to={'/service'}><div className="service-btn">고객센터</div></Link>
                </div>
            </div>
        </div>
        </>
    );
}; 

export default Nav;
