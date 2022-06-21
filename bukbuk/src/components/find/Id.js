import React, { useState } from "react";
import Menu from "../navibar/Menu";
import Nav from "../navibar/Nav";
import axios from "axios";
import '../../css files/id-find.css';
function Id(){
    const [ input , setInput] = useState({
        email: "",
        phone: "",
    });


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
    const onSubmit= (e)=>{
        e.preventDefault();
        if(!isValidEmail && !isValidPhone){
            alert('형식을 확인해주세요 !')
        }else{
            console.log("success !")
            axios.post('',body)
            .then(res=>console.log(res))
        }
    }
    return(
        <>
        <Nav/>
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
                    placeholder="이메일" 
                    onChange={onChange}
                    name= "email"
                    className="find-id-email"
                     />
                <input 
                    placeholder="전화번호" 
                    onChange={onChange}
                    name= "phone"
                    className="find-id-phone"
                />
                <button type="submit" className="find-id-submit">확인</button>
            </form>
        </main>
        </>
    );
};

export default Id;