import React , {useState ,useEffect} from "react";
import Axios from 'axios';
import Nav from "../navibar/Nav";
import '../../css files/service.css'
import {Link} from 'react-router-dom';
import Menu from "../navibar/Menu";
import ShowFaq from './ShowFaq';

function Service(){  


    // 입력 받은 값을 전체 고객센터 창에 띄우는 상태변경 useState
    const [viewContent , setViewContent] = useState ([])
    console.log("hello")
    
    useEffect(()=>{
        Axios.get('http://localhost:8080/service')
        .then((response)=>{
          setViewContent(response.data);
          console.log(response);
        }).catch(console.log('에러'))
    },[])


    
    return(
        <>
        <Nav/>
        <Menu/>
        <main className="service-main">
            <div id="board">
                <div class="service-title">
                    <h1>고객문의 FaQ</h1>
                </div>
               <div className="faq" >
                    <ShowFaq faq={viewContent}/>
               </div>
            </div>
            <Link to={'/write'}>
                <button className="write-button">글쓰기</button>
            </Link>
        </main>
        </>
    );
};


export default Service;