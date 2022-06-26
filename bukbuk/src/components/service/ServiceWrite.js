import React, {useState} from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../../css files/service-write.css';
import Menu from "../navibar/Menu";


function ServiceWrite(id){
   
    

    // 제목과 내용을 담는 상태 변경 useState
    const [content , setContent] = useState({
        title : "",
        context: ""
    })

    const [value , setValue] = useState(null)
    // 드롭 다운


    const onClick = (e)=>{
        console.log(e.target.value)
        setValue(e.target.value)
    }

   let history = useHistory();


    const {title , context} = content;

    let body = {
        params:{
            service_title: title,
            service_context: context,
            service_category:{value},
            service_id: id
        }
    }


    // 서버 받는 코드
      const submitReview = ()=>{
        axios.post('http://localhost:8000/api/insert',null , body)
        .then(()=>{
          alert('등록 완료!');
          history.push('/service')
        }).catch(
            console.log("서버에 도달하지 못했습니다."))
        return 
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
            <Menu/>
            <main className="service-write-main">
                <div id="writedown">
                    <input 
                    className="title-input" 
                    type="text" 
                    placeholder="제목을 입력해주세요"
                    onChange={getValue}
                    name="title"/>
                </div>
                <div class="write-category">
                    <label for="cat" className="req">카테고리</label>
                    <select id="cat" onClick={onClick}>
                        <option value={'결제 문의'} >결제 문의</option>
                        <option value={'서비스 오류'}>서비스 오류</option>
                        <option value={'로그인 문제'}>로그인 문제</option>
                        <option value={'검색 기능'}>검색 기능</option>
                        <option value={'기타'}>기타</option>
                    </select>
                </div>
                <div className="write-container">
                    <CKEditor
                        editor={ClassicEditor}
                        data="<p>이곳에 글을 작성해주세요</p>"
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
                </div>
                <button 
                className="submit"
                onClick={submitReview}
                >입력</button>
                <Link to={'/Service'}><button className="go-back">돌아가기</button></Link>
            
            </main>
        </>
    );
};

export default ServiceWrite;