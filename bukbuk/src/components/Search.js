import React from "react";
import axios from 'axios';

const Kakao = axios.create({
    baseURL: 'https://dapi.kakao.com', // 공통 요청 경로를 지정해준다.
    headers: {
      Authorization: 'KakaoAK {28f7b5fa8ae8f52c109d246d8587c93e}',
    },
  });
  
  // search book api
  export const bookSearch = (params) => {
    return Kakao.get('/v3/search/book', { params });
  };

export default Search;

