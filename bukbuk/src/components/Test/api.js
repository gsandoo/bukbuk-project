import axios from "axios";

const kakao_key= 'ef37ca87e94f8a18af91664dbe0b52b1';

const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com", // 공통 요청 경로를 지정해준다.
  headers: {
    Authorization: `KakaoAK ${kakao_key}` // 공통으로 요청 할 헤더
  }
});

// search blog api
export const bookSearch = params => {
  return Kakao.get("/v3/search/book", { params });
};