import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from "../navibar/Nav";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../../css files/service-write.css';

function ServiceWrite(){
   
    

    // 제목과 내용을 담는 상태 변경 useState
    const [content , setContent] = useState({
        title : "",
        content: ""
    })

  


    // 서버 받는 코드
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
            <main className="service-main">
                <div id="writedown">
                    <input 
                    className="title-input" 
                    type="text" 
                    placeholder="제목을 입력해주세요"
                    onChange={getValue}
                    name="title"/>
                    <CKEditor
                        editor={ClassicEditor}
                        data="<p>Hello from CKEditor 5!</p>"
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
                    onClick={submitReview}
                    >입력</button>
                    <Link to={'/Service'}><button className="go-back">돌아가기</button></Link>
                </div>
            </main>
        </>
    );
};

export default ServiceWrite;

