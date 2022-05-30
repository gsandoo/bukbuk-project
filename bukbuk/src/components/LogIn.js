import '../hello.css'
import React,{useState} from 'react';

function LogIn(){

  const [inputValue, setInputValue] = useState({
    userName: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
  });

  const [checkBoxActive, setCheckBoxActive] = useState(false);

  const { username, email, password, phoneNumber, address } = inputValue;
  
  const handleInput = event => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue, 
      [name]: value,
    });
  };

  // 모든 input의 value가 1자 이상이 되어야 한다
const isValidEmail = email.includes('@') && email.includes('.');
const specialLetter = password.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
const isValidPassword = password.length >= 8 && specialLetter >= 1;
const isValidInput = username.length >= 1 && phoneNumber.length >= 1 && address.length >= 1;
const isCheckBoxClicked = () => {
    setCheckBoxActive(!checkBoxActive);
  };
// 검사한 모든 로직의 유효성 검사가 true가 될때 getIsActive함수가 작동한다. 버튼 클릭 이벤트가 발생할때 넣어줄 함수.
const getIsActive = 
   isValidEmail && isValidPassword && isValidInput && checkBoxActive === true;

// 유효성 검사 중 하나라도 만족하지못할때 즉, 버튼이 비활성화 될 때 버튼을 클릭하면 아래와 같은 경고창이 뜬다.
const handleButtonValid = () => {
 if (
   !isValidInput ||
   !isValidEmail ||
   !isValidPassword ||
   !isCheckBoxClicked()
   ) {
   alert('please fill in the blanks');
 };
}
  // jsx코드
  
  return (
    
    <main className='signUp'>
      <form className="signUpInput">
            <div className="nameInput">
              <div className="inputMessage">Name *</div>
              <input
                name="userName"
                onChange={handleInput}
              />
            </div>
            <div className="emailInput">
              <div className="inputMessage">Email(ID) *</div>
              <input
                name="email"
                onChange={handleInput}
              />
            </div>
            <div className="passwordInput">
              <div className="inputMessage">Password *</div>
              <input
                type="password"
                name="password"
                onChange={handleInput}
              />
            </div>
            <div className="phoneNumberInput">
              <div className="inputMessage">Phone Number *</div>
              <input
                name="phoneNumber"
                onChange={handleInput}
              />
            </div>
            <div className="addressInput">
              <div className="inputMessage">Address *</div>
              <input
                name="address"
                onChange={handleInput}
              />
            </div>
      </form>
        <div className="agreeCheckbox">
            <div className="accountCheckboxAgree">
              <input
                type="checkbox"
                className="checkbox"
                onClick={isCheckBoxClicked}
              />
              <span className="checkboxContent">
                I agree to the
                <span className="line">terms conditions and privacy policy</span>*
              </span>
            </div>
            <div className="accountCheckboxAgree">
              <input type="checkbox" className="checkbox" />
              <span className="checkboxContent">
                I would like to receive you newsletter
              </span>
            </div>
            <span className="checkboxExplain">
              You will be able to set your password after you've confirmed your
              email address
            </span>
          </div>
        <div className="signUpBottom">
          <button
            className={
              getIsActive ? 'signUpButtonAction' : 'signUpButtonInaction'
            }
            type="button"
            onClick={handleButtonValid}
          >
            CREATE USER ACCOUNT
          </button>
        </div>
    </main>
    )
  }


export default LogIn;

