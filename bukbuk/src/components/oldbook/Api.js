import React from "react";
import axios from "axios";


async function Api(){
    try{
        const response = await axios.get('http://api.kcisa.kr/API_CNV_045/request?serviceKey=8f6f1058-471c-4819-a9d2-669af4859a92&numOfRows=10&pageNo=1')
        console.log(response.data.response.body.items.item) // 전국 서점 리스트
    }catch(e){
        console.error(e);
    }
}

export default Api;

