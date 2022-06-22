import React, { useState } from "react";
import Nav from "../navibar/Nav";
import Menu from '../navibar/Menu';
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import '../../css files/login.css';
import Home from "../Home/Home";
import App from "../../App";




function Login(){
        const [inputValue , setInputValue] = useState({
            id: "",
            password: ""
        });

        const [users,setUsers] = useState(null);

        //보안 인증
        const authenticated = users != null;



        const {id , password } = inputValue;


        // input 위치에 맞게 할당하는 함수
        const onChange =  event => {
            const { name, value } = event.target;
            // console.log(event.target.value)
            setInputValue({
              ...inputValue, 
              [name]: value,
            });
          };

          const specialLetter = password.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
          const isValidId = id.length >= 1;
          const isValidPassword = password.length >= 8 && specialLetter >= 1;  

          const getIsActive = isValidId && isValidPassword  === true;


         
        let body = {

            id : id,
            password: password

         };


        


         // 제출
         const handleSubmit =()=>{
            // e.preventDefault();
            console.log("id :" + id)
            console.log("pw :" + password)
            axios.post("" , body)
            .then(res=> 
               setUsers(res.data)
                )
            .catch(e=> console.log(e))
            if(users)
            {return <Home authenticated={authenticated}/>};
            return <App authenticated={authenticated}/>;      
        }
            
        const ALert =(e)=>{
            e.preventDefault();
            if(!getIsActive){
                alert("아이디와 비밀번호를 알맞게 기입해 주세요")
            }
        } 
        

        const { from } = window.location.pathname || { from: { pathname: "/" } };
        if (authenticated) return <Redirect to={from} />; //from 으로 이동

    return(
        <>
            <Nav/>
            <Menu/>
            <main id="login-box">
                <div className="top">
                    <div className="logo">
                        <img src="https://i.pinimg.com/736x/e5/99/a8/e599a837c7838a6da566c099c88ac3dd.jpg" alt="logo"/>
                    </div>
                    <p>Hello , Welcome to BUKBUK ! </p>
                </div>
                <div className="login-input">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="id-pw">
                            <input placeholder="아이디" type="id" name="id" onChange={onChange} className="id-input"/>
                            <input placeholder="비밀번호" type={'password'} name="password" onChange={onChange} className="pw-input"/>
                        </div>

                        {/* 로그인 버튼 */}
                        <button type="submit" className={getIsActive ?'green' :'gray'} onClick={ALert}>로그인</button>
                        
                        <div className="find">
                            <Link to={'/find/id'} className='id-find'>아이디 찾기</Link>
                            <Link to={'find/pw'}>비밀번호 찾기</Link>
                        </div>
                        <div className="new">
                            <Link to={'/new-member'} className='move-new-member'>회원가입</Link>
                        </div>
                    </form>
                </div>
            </main> 
        </>
    );
};

export default Login;