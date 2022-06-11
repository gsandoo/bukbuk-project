import React , {useState ,useEffect} from "react";
import axios from 'axios';
import Nav from "../navibar/Nav";
import '../../css files/service.css'
import {Link} from 'react-router-dom';
import Menu from "../navibar/Menu";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser';

function Service(){  

       // 제목과 내용을 담는 상태 변경 useState
       const [content , setContent] = useState({
        title : "",
        content: ""
    })


    // 입력 받은 값을 전체 고객센터 창에 띄우는 상태변경 useState
    const [viewContent , setViewContent] = useState ([])
  


    useEffect(()=>{
        axios.get('http://localhost:8000/api/get').then((response)=>{
          setViewContent(response.data);
        })
      },[viewContent])
    
      const submitReview = ()=>{
        axios.post('http://localhost:8000/api/insert', {
          title: content.title,
          content: content.content
        }).then(()=>{
          alert('등록 완료!');
        }).catch(
            console.log("서버에 도달하지 못했습니다."))
      };


    // 입력받은 값을 이름에 맞게 할당 해주는 getValue
    const getValue = e =>{
        const {name, value} = e.target;
        setContent({
            ...content,
            [name]: value
    })
    console.log(content)
    } 
    
    
    
    return(
        <>
        <Nav/>
        <Menu/>
        <main className="service-main">
            <div id="board">
               {viewContent.map(element=>
                <div style={{borderBottom: '1px solid lightgray'}}>
                    <h2>{element.title}</h2>
                    <div>
                        {ReactHtmlParser(element.content)}
                    </div>
                </div>
               )}
            </div>
            <div id="writedown">
                <input 
                className="title-input" 
                type="text" 
                placeholder="제목을 입력해주세요"
                onChange={getValue}
                name="title"/>
                <CKEditor
                    editor={ClassicEditor}
                    placeholder='내용을 입력하세요'
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}

                    // content 도 getValue를 적용할 수 있지만 , 에디터 설정을 바꿔본다.
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                        setContent({
                            ...content, // 상태변경엔 spread 연산자를 통한 덮어쓰기 해줘야한다 
                            content: data
                        })
                        console.log(content)
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                />
                <button 
                className="submit"
                onClick={
                    // setViewContent(viewContent.concat({...content}))
                    submitReview
                }
                >입력</button>
                <Link to={'/Service'}><button className="go-back">돌아가기</button></Link>
            </div>         
        </main>
        </>
    );
};

export default Service;

