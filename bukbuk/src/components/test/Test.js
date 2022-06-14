import React , {useState ,useEffect} from "react";
import Axios from 'axios';
import '../../css files/service.css'
import {Link} from 'react-router-dom';
import Testtwo from './Testtwo';

function Test(){  

       // 제목과 내용을 담는 상태 변경 useState
    //    const [content , setContent] = useState({
    //     title : "",
    //     content: ""
    // })


    // 입력 받은 값을 전체 고객센터 창에 띄우는 상태변경 useState
    const [viewContent , setViewContent] = useState ([])
  
    
    useEffect(()=>{
        
        Axios.get({/* 여기 중괄호 까지 지우고 'url주소' 입력해주세요  */})
        .then((response)=>{
          setViewContent(response.data);
          console.log(response) // 콘솔창 뜨는지 확인바람요 !
            
        }).catch(e=>console.log(e))
        
    },[])



    // useEffect(()=>{
    //     axios.get('http://localhost:8000/api/get')
    //     .then((response)=>{
    //       setViewContent(response.data);
    //     })
    //     .then(console.log(viewContent))
    //   },[viewContent])
    
    //   const submitReview = ()=>{
    //     axios.post('http://localhost:8000/api/insert', {
    //       title: content.title,
    //       content: content.content
    //     }).then(()=>{
    //       alert('등록 완료!');
    //     }).catch(
    //         console.log("서버에 도달하지 못했습니다."))
    //   };


    // 입력받은 값을 이름에 맞게 할당 해주는 getValue
  
    
    
    return(
        <>
        
        <main className="service-main">
            <div id="board">
                <div class="service-title">
                    <h1>고객문의 FaQ</h1>
                </div>
               {/* {viewContent.map(element=>
                <div style={{borderBottom: '1px solid lightgray'}}>
                    <h2>{element.title}</h2>
                    <div>
                        {ReactHtmlParser(element.content)}
                    </div>
                </div>
               )} */}
               <div className="faq">
                    <Testtwo content={viewContent}/>
               </div>
            </div>
            <Link to={'/write'}>
                <button className="write-button">글쓰기</button>
            </Link>
        </main>
        </>
    );
};

export default Test;

