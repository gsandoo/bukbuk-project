
import axios from "axios";


export function SignIn ({id , password}){

    let body = {params:{
        mem_id: id,
        mem_pwd: password
    }}

    const user =axios.post('http://localhost:8080/login-ok' , null  , body)
    .then(res=> console.log(res))
    .catch(e=>console.log(e))
    
    return user;
};