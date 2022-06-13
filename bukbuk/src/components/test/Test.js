import React , {useState ,useEffect} from "react";
import Axios from 'axios';
import '../../css files/test.css';
import Testtwo from "./Testtwo";



function Test(){




    // 입력 받은 값을 전체 고객센터 창에 띄우는 상태변경 useState
    const [viewContent , setViewContent] = useState ([])





 useEffect(()=>{
        
            Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response)=>{
              setViewContent(response.data);
              console.log(response)
                
            }).catch(e=>console.log(e))
            
},[])

       

    return(
        <main className="service-main">
            <div>
                <Testtwo users={viewContent}/>                
            </div>


        </main>



);
}

export default Test;

