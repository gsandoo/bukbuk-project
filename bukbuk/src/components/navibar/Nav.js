import React from "react";
import '../../css files/nav.css';
import {Link} from 'react-router-dom';


function Nav(){
    return(
        <div id="navibar" className="nav-flex">
            <div className="nav-left">
                <div className="icon">
                    <img src="https://i.pinimg.com/736x/e5/99/a8/e599a837c7838a6da566c099c88ac3dd.jpg" alt="icon" className="title-icon" />
                </div>
                <div className="title">
                    BUKBUK
                </div>
            </div>
            <div className="search">
                <form 
                action="" 
                method=""
                className="search-form">
                    <div className="search-type">
                        <input type="text" placeholder="도서명 / isbn 검색" />
                    </div>
                    <div className="search-btn">
                        <button type="submit"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxsZsjY46D3whfdkqeE3BvzAKy61374wBUGw&usqp=CAU" alt="search-btn" /></button>
                    </div>
                </form>
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
    );
}; 

export default Nav;
