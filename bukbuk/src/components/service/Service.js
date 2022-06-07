import React from "react";
import Nav from "../navibar/Nav";
import '../../css files/service.css'
import {Link} from 'react-router-dom';
import Menu from "../navibar/Menu";


function Service(){

    return(
        <>
        <Nav/>
        <Menu/>
        <main className="service-main">
            <div id="board">
                <h1 className="title">질문</h1>
                <p className="qustion">내용</p>
                <p className="reply">답변</p>
            </div>
            <Link to={'/Write'}><button className="write">글 작성하기</button></Link>
        </main>
        </>
    );
};

export default Service;

