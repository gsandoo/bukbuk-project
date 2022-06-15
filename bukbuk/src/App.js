import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/login/Login';
import NewMember from './components/./new-member/NewMember';
import Service from './components/service/Service';
import Home from './components/Home';
import ServiceWrite from './components/service/ServiceWrite';
import Oldbooks from './components/oldbook/Oldbooks';
import Books from './components/search-item/Books';
function App() {
   
   return(
      <BrowserRouter>
         <Switch> 
            <Route path={'/'} exact component={Home} />
            <Route path={'/login'} component={Login}/>
            <Route path={'/new-member'}component={NewMember}/>
            <Route path={'/service'} component={Service}/>
            <Route path={'/write'} component={ServiceWrite}/>
            <Route path={'/oldbooks'} component={Oldbooks}/>
            <Route path={'/book/description/'} component={Books}/>
         </Switch>
      </BrowserRouter>
   )

}
export default App;
