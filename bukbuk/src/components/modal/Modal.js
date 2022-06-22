import React from "react";
import '../../css files/modal-for-finding.css'
import {Link} from 'react-router-dom';

function Modal(props){
    const {open , close, header , data , comment } = props;

    return(
        <div className={open ? 'openModal modal-background' : 'modal'}>
            {open ? (
                <section id="modal-find">
                    <header className="modal-find-head">
                        {header}
                        <button className="modal-find-close" onClick={close}>
                        &times;
                        </button>
                    </header>
                    <div className="modal-find-main">
                        <p className="modal-find-comment">{comment}</p>
                        {data}
                        <p>입니다 ! </p>
                    </div>
                    <div className="modal-find-goback-login">
                        <Link to={'/login'}>로그인 페이지로 돌아가기</Link>
                    </div>
                </section>
            ) : null}
        </div>
  );
};

export default Modal;