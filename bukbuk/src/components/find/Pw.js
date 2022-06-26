import React , {useState} from "react";
import Menu from "../navibar/Menu";

import axios from "axios";
import '../../css files/pw-find.css'
import Modal from "../modal/Modal";


function Pw(){
    
    
    const [ input , setInput] = useState({
        email: "",
        name: "",
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

    const {email , name} = input;


    // 이메일 유효성 검사
    const isValidEmail = email.includes('@') && email.includes('.');
    const isValidName =  name.length <= 2;


    const  getIsActive = isValidEmail && isValidName === true ;  

    let body ={
        email: email,
        name : name
    }
    const onSubmit= (e)=>{
        e.preventDefault();
        if(!getIsActive){
            alert('형식을 확인해주세요 !')
        }else{
            console.log("success finding !")
            axios.post('',body)
            .then(res=>setData(res.data));
            openModal();
        }
    }
    return(
        <>
     
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
                    placeholder="이메일을 입력해주세요" 
                    onChange={onChange}
                    name= "email"
                    className="find-pw-email"
                    type={'email'}
                />
                <input 
                    placeholder="성함을 입력해주세요" 
                    onChange={onChange}
                    name= "phone"
                    className="find-pw-name"
                    type={'name'}
                />
                <button type="submit" className="find-pw-submit">확인</button>
            </form>
            <Modal open ={modalOpen} close={closeModal} header="Modal Heading" data={data} comment={`자기님의 비밀번호는 ...`}/>  
        </main>
        </>
    );
};

export default Pw;