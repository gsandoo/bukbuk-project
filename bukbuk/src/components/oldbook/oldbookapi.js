import axios from 'axios';

const KEY ='8f6f1058-471c-4819-a9d2-669af4859a92';


const Oldbook=  axios.get('http://api.kcisa.kr/API_CNV_045/request?serviceKey=`${KEY}`')
.then(data=>{console.log(data)})

export default Oldbook;