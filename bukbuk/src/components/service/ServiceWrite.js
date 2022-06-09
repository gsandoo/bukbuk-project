import React from "react";
import { Link } from "react-router-dom";
import Nav from "../navibar/Nav";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function ServiceWrite(){
    return(
        <>
            <Nav/>
            <main className="service-main">
                <div id="writedown">
                    <input className="title-input" type="text" placeholder="제목을 입력해주세요"/>
                    {/* <textarea className="text-area" placeholder="내용을 입력해주세요"></textarea> */}
                    <CKEditor
                        editor={ClassicEditor}
                        data="<p>Hello from CKEditor 5!</p>"
                        onReady={editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log({ event, editor, data });
                        }}
                        onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                            console.log('Focus.', editor);
                        }}
                    />
                    <button className="submit">입력</button>
                    <Link to={'/Service'}><button className="go-back">돌아가기</button></Link>
                </div>
            </main>
        </>
    );
};

export default ServiceWrite;

