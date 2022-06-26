import React, { useState } from "react";
import Menu from "../navibar/Menu";

import axios from "axios";
import '../../css files/id-find.css';
import Modal from "../modal/Modal";

function Id(){

    // 이메일과 전화번호 상태변화 useState
    const [ input , setInput] = useState({
        email: "",
        phone: "",
    });

    // 데베에서 받아온 값 저장
    const [ data , setData] = useState([]);

    // 모달창 상태변화

    const [modalOpen , setModalOpen] = useState(false);

    const openModal =()=>{
        setModalOpen(true);
    }

    const closeModal = ()=>{
        setModalOpen(false);
    }

    // input 값 할당
    const onChange =(e)=>{
        const {name , value } = e.target;

        console.log(e.target.value)
        setInput({
            ...input,
            [name]: value});
    }

    const {email , phone} = input;



    // 이메일 유효성 검사
    const isValidEmail = email.includes('@') && email.includes('.');
    const isValidPhone = phone.includes('-') && phone.length >= 13;



    let body ={
        email: email,
        phone: phone
    }

    const  getIsActive = isValidEmail && isValidPhone === true ;  
    
    
    const onSubmit= (e)=>{
        e.preventDefault();
        if(!getIsActive){
            alert('형식을 확인해주세요 !')
            return
        }else{
            console.log("success finding!")
            axios.post('',body)
            .then(res=>setData(res.data))
            openModal()
        }
    }
    return(
        <>
        <Menu/>
        <main id="find-id">
            <div className="find-id-top">
                <div className="find-id-logo">
                    <img src="https://i.pinimg.com/736x/e5/99/a8/e599a837c7838a6da566c099c88ac3dd.jpg" alt="logo"/>
                </div>
                <p className="find-id-p">Hello , Here's Your Id ! </p>
            </div>
            <form 
                className="find-id-input" 
                onSubmit={onSubmit}
            >
                <input 
                    placeholder="이메일을 입력해주세요" 
                    onChange={onChange}
                    name= "email"
                    className="find-id-email"
                     />
                <input 
                    placeholder="전화번호를 입력해주세요" 
                    onChange={onChange}
                    name= "phone"
                    className="find-id-phone"
                />
                <button type="submit" className="find-id-submit">확인</button>
            </form>
            <Modal open ={modalOpen} close={closeModal} header="Modal Heading" data ={data} comment={`자기님의 id 는 ...`}/>  
        </main>
        </>
    );
};

export default Id;