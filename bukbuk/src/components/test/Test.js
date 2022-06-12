import React , {useState ,useEffect} from "react";
import Axios from 'axios';
import '../../css files/test.css';
import Testtwo from "./Testtwo";



function Test(){




    // 입력 받은 값을 전체 고객센터 창에 띄우는 상태변경 useState
    const [viewContent , setViewContent] = useState ([])




//     useEffect(()=>{
//                axios.post('http://localhost:8080/service')
//                .then(res=>{
//                res.parse()
//                }).then(data=>console.log(data))
//                .catch(console.log('error2'))
//              },[]);

 useEffect( async()=>{
        
           await Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response)=>{
              setViewContent(response.data);
                
            }).catch(e=>console.log(e))
            
     },[])

       

    // 입력받은 값을 이름에 맞게 할당 해주는 getValue

    return(
        <main className="service-main">
            <div>
                <Testtwo users={viewContent}/>                
            </div>


        </main>



);
}

export default Test;

