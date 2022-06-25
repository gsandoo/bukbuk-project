import React, { useState } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/login/Login';
import NewMember from './components/./new-member/NewMember';
import MyPage from './components/mypage/MyPage';
import Service from './components/service/Service';
import Home from './components/Home/Home';
import AuthRoute from './components/auth/AuthRoute';
import ServiceWrite from './components/service/ServiceWrite';
import Oldbooks from './components/oldbook/Oldbooks';
import Books from './components/search-item/Books';
import NewBooks from './components/newbook/NewBooks';
import Id from './components/find/Id';
import Pw from './components/find/Pw';
import LogOut from './components/logout/LogOut';
import MemberOut from './components/member-out/MemberOut';





function App() {

  // const [state , setState] = useState(false)
   
  //  const authenticated = state !== false;

  
  // appjs 부터 시작해야함

   return(
      <BrowserRouter>
         <Switch> 
         <Route path={'/'}exact component={Home}/>
            <Route
            path="/login"
            render={props => (
              <Login authenticated={authenticated} {...props} />
            )}
          />
            
            <Route path={'/new-member'}component={NewMember}/> 
            <Route path={'/service'} component={Service}/>
            <Route path={'/write'} component={ServiceWrite}/>
            <Route path={'/oldbooks'} component={Oldbooks}/>
            <Route path={'/book'} component={Books}/>
            <Route path={'/newbooks'} component={NewBooks}/>
            <Route path={'/find/id'} component={Id}/>
            <Route path={'/find/pw'} component={Pw}/>


              {/*로그인 안 했을 때 접근 불가 url  */}
            <AuthRoute
            authenticated={authenticated}
            path="/mypage"
            render={props => <MyPage  {...props} />}
          />

            
            <AuthRoute
              authenticated={authenticated}
              path="/logout"
              render={props => <LogOut  {...props} />}
            />  


            <AuthRoute
              authenticated={authenticated}
              path="/member-out"
              render={props => <MemberOut  {...props} />}
            />  

         </Switch>
      </BrowserRouter>
   )

}
export default App;