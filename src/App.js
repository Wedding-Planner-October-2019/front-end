import React from 'react';
import { connect } from 'react-redux';
import './scss/UserForm.scss';
import Navbar from "./components/Navbar";
import Profile1 from "./featured/Profile1";
import Profile2 from "./featured/Profile2";
import Profile3 from "./featured/Profile3";
import Profile4 from "./featured/Profile4";
import Home from './pages/Home';


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
        <Route exact path="/UserForm" component={UserForm} />
       
      </Switch>
      </>
    );

}

 const mapStateToProps = (state) => {
   return {
     posts: state.posts,
   }

 }

export default withRouter (App);
