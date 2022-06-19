import axios from "axios";

const api_key =' FBC16A30E40693299C46A5CAE205978C6CEFA2463E5E5F528D7FFECB82588EA8';


const Bestseller = axios.get(`http://book.interpark.com/api/xmlrpc?key=${api_key}`)
.then(res=>console.log(res))
.catch(console.log("error"))