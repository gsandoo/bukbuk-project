import React from "react";
import { Link } from "react-router-dom";
import Nav from "../navibar/Nav";

function ServiceWrite(){
    return(
        <>
            <Nav/>
            <main className="service-main">
                <div id="writedown">
                    <input className="title-input" type="text" placeholder="제목을 입력해주세요"/>
                    <textarea className="text-area" placeholder="내용을 입력해주세요"></textarea>
                    <button>입력</button>
                    <Link to={'/Service'}><button className="go-back">돌아가기</button></Link>
                </div>
            </main>
        </>
    );
};

export default ServiceWrite;

