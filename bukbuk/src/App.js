import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/login/Login';
import NewMember from './components/./new-member/NewMember';
import MyPage from './components/mypage/MyPage';
import Service from './components/service/Service';
import Home from './components/Home/Home';

import ServiceWrite from './components/service/ServiceWrite';
import Oldbooks from './components/oldbook/Oldbooks';
import Books from './components/search-item/Books';
import NewBooks from './components/newbook/NewBooks';
import Id from './components/find/Id';
import Pw from './components/find/Pw';


// import signIn from './components/logintest/auth';
// import AuthRoute from './components/logintest/AuthRoute';
// import Profile from './components/logintest/Profile';


function App(authenticated) {
   // const [user , setUser] = useState(null);
   
   


   // axios 로 접근하는 코드 짜야함
   //로그인 / 로그아웃
   // const login = ({email, password}) => setUser(signIn({email,password}));
   // const  logout = ()=> setUser(null);

   return(
      <BrowserRouter>
         <Switch> 
            <Route path={'/'} exact component={Home} />
            {/* <Route path={'/login'} component={Login}/> */}
            <Route
            path="/login"
            render={props => (
              <Login authenticated={authenticated} {...props} />
            )}
          />
            
      

            {/* {authenticated
            ?<Route path={'/mypage'} component={MyPage}/>
            :  
            } */}
            <Route path={'/new-member'}component={NewMember}/> 
            <Route path={'/service'} component={Service}/>
            <Route path={'/write'} component={ServiceWrite}/>
            <Route path={'/oldbooks'} component={Oldbooks}/>
            <Route path={'/book'} component={Books}/>
            <Route path={'/newbooks'} component={NewBooks}/>
            <Route path={'/find/id'} component={Id}/>
            <Route path={'/find/pw'} component={Pw}/>
         </Switch>
      </BrowserRouter>
   )

}
export default App;