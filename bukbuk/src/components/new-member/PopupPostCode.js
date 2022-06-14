import React from 'react';
import DaumPostcode from "react-daum-postcode";
import '../../css files/new-member-input.css';

const PopupPostCode = (props) => {
	// 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
    const handlePostCode = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data)
        document.querySelector('.road-address').value =fullAddress;
        document.querySelector('.post').value = data.zonecode;
        props.onClose()
    }
    const postCodeStyle = {
        display: "block",
        position: "absolute",
        top: "0%",
        left: "100%",
        width: "600px",
        height: "600px",
        padding: "7px",
      };
 
    return(
      <>
      <div className='close'>
        {/* // 닫기 버튼 생성 */}
        <button type='button' onClick={() => {props.onClose()}} className='postCode_btn'>닫기</button>
      </div>
        <div>
            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />   
        </div>
        </>
    )
}


 
export default PopupPostCode;