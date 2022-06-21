import React , {useState} from "react";
import Menu from "../navibar/Menu";
import Nav from "../navibar/Nav";
import axios from "axios";
import '../../css files/pw-find.css'


function Pw(){
    const [ input , setInput] = useState({
        email: "",
        name: "",
    });


    // input 값 할당
    const onChange =(e)=>{
        const {name , value } = e.target;

        console.log(e.target.value)
        setInput({
            ...input,
            [name]: value});
    }

    const {email , name} = input;



    // 이메일 유효성 검사
    const isValidEmail = email.includes('@') && email.includes('.');
    const isValidName =  name.length >= 3;



    let body ={
        email: email,
        name : name
    }
    const onSubmit= (e)=>{
        e.preventDefault();
        if(!isValidEmail && !isValidName){
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
        <main id="find-pw">
            <div className="find-pw-top">
                <div className="find-pw-logo">
                    <img src="https://i.pinimg.com/736x/e5/99/a8/e599a837c7838a6da566c099c88ac3dd.jpg" alt="logo"/>
                </div>
                <p className="find-pw-p">Hello , Here's Your Pw ! </p>
            </div>
            <form 
                className="find-pw-input" 
                onSubmit={onSubmit}
            >
                <input 
                    placeholder="이메일" 
                    onChange={onChange}
                    name= "email"
                    className="find-pw-email"
                    type={'email'}
                />
                <input 
                    placeholder="전화번호" 
                    onChange={onChange}
                    name= "phone"
                    className="find-pw-phone"
                    type={'phone'}
                />
                <button type="submit" className="find-pw-submit">확인</button>
            </form>
        </main>
        </>
    );
};

export default Pw;