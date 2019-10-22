import React from 'react';
import './scss/UserForm.scss';
import Navbar from "./components/Navbar";
import Profile1 from "./featured/Profile1";
import Profile2 from "./featured/Profile2";
import Profile3 from "./featured/Profile3";
import Profile4 from "./featured/Profile4";
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import Marriage from "./components/Marriage";


import { withRouter } from "react-router";



import { Switch, Route } from 'react-router-dom';
import UserForm from './pages/UserForm';

const App = (props) => {
    
    return (
      <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Profile1" component={Profile1} />
        <Route path="/Profile2" component={Profile2} />
        <Route path="/Profile3" component={Profile3} />
        <Route path="/Profile4" component={Profile4} />
        <PrivateRoute path="/UserForm" component={UserForm} />
        <Route path="/Login" component={Login} />
        <Route path="/CreateAccount" component={CreateAccount} />
        <PrivateRoute path="/Marriage" component={Marriage} />
      </Switch>
      </>
    );

}

export default withRouter(App);
