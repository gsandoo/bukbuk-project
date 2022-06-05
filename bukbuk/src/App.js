import React from 'react';
import './App.css';
import './css files/new-member-input.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/login/Login';
import Nav from './components/navibar/Nav';
import NewMember from './components/NewMember';
import Service from './components/service/Service';
import Home from './components/Home';

function App() {
   
return(
  <BrowserRouter>
  <Switch> 
      <Route path={'/'} exact component={Home} />
      <Route path={'/Login'} component={Login}/>
      <Route path={'/New-member'}component={NewMember}/>
      <Route path={'/Service'} component={Service}/>
      </Switch>
   </BrowserRouter>
)

}
export default App;
