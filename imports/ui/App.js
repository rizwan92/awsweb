import React, { Component } from 'react';
import { Route,Redirect,Switch } from 'react-router-dom';
import { Session } from 'meteor/session';
import  MainLayout  from './layouts/MainLayout';
import Header from './components/header/Header';
import NodePage from './pages/NodePage';
import Dashboard from './pages/Dashboard';
import MDL from './pages/MDL';
import CheckPage from './pages/CheckPage';
import AwsSdkPage from './pages/AwsSdkPage';
export default class App extends Component {

  render(){
   return (
     <div>
      <Switch>
            <Route exact path="/" component={MainLayout} />
            <Route exact path="/webhosting" component={MainLayout}/>
            <Route exact path="/cloudhosting" component={MainLayout}/>
            <Route exact path="/mynode" component={NodePage}/>
            <Route exact path="/aws" component={AwsSdkPage}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/mdl" component={MDL}/>
            <Route exact path="/check" component={CheckPage}/>
            <Route component={NoMatch}/>
        </Switch>
     </div>
   )
 }
}
const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)
