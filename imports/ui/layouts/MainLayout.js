import React, { Component } from 'react';
import {Route, Link, NavLink, withRouter, Redirect} from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import MainPage from '../pages/MainPage';
import WebHosting from '../pages/WebHosting';
import CloudHosting from '../pages/CloudHosting';
import Modal from '../components/Modal';
import { Session } from 'meteor/session';
import UserApi from '../../api/user';
class MainLayout extends Component {
  constructor(){
  super();
  this.state = {
    isModalOpen: false,
    condition:false,
    name:'',
    email:'',
    number:'',
    password:'',
    cpassword:'',
  }
  this.closeModal = this.closeModal.bind(this);
  this.openModal = this.openModal.bind(this);
  Meteor.subscribe('alluser')
}
  setValue(field, event) {
   let object = {};
   object[field] = event.target.value;
   this.setState(object);
  }
  openModal() {
    this.setState({
      isModalOpen: true
    })
  }
  closeModal() {
    this.setState({
      isModalOpen: false
    })
  }

  handleRSubmit(event) {
    event.preventDefault();
    const name = this.state.name.trim();
    const email = this.state.email.trim();
    const number = this.state.number.trim();
    const password = this.state.password.trim();
    const cpassword = this.state.cpassword.trim();
    if (password === cpassword) {

      Meteor.call('user.check',email,password ,(error,result)=>{
        if (result) {
           Bert.alert( 'Email already Exist', 'danger', 'growl-top-right' );
        }else {
          const user={
            name,email,number,password,image:'',
          }
          Meteor.call('user.insert',user,(er,res)=>{
            if (res) {
              Bert.alert( `Successfull Registered`, 'success', 'growl-top-right' );
              Meteor.call(
                  'sendEmail',
                    email,
                  'no-reply@yourdomain.com',
                  'Hello from Meteor!',
                  'This is a test of Email.send.'
                ,(err,res)=>{});
              this.setState({condition:true});
            }
          });
        }
      });
    }else {
      Bert.alert( `password does not match`, 'danger', 'growl-top-right' );
      this.setState({password:'',cpassword:'',});
    }
  }

  handleLSubmit(event) {
    event.preventDefault();
    const email = this.state.email.trim();
    const password = this.state.password.trim();
    Meteor.call('user.check',email,password,(err,res)=>{
      if (res) {
          Bert.alert( 'succefull logged in', 'success', 'growl-top-right' );
          Session.setPersistent('awsuser', res)
          this.props.history.push('/check');
      }else {
        Bert.alert( 'Wrong Email Password', 'danger', 'growl-top-right' );
      }
    }
    )
    this.setState({
      email:'',
     password:'',
    });
  }

  render() {
    return (
      <div>
      <Header />
      <Route exact path="/" render={props =><MainPage {...props} openModal={this.openModal} />}/>
      <Route exact path="/webhosting" component={WebHosting} />
      <Route exact path="/cloudhosting" component={CloudHosting}/>
      <Footer />
      <Modal
        isModalOpen={this.state.isModalOpen}
        closeModal={this.closeModal}
        style={modalStyle}>
        {          this.state.condition ?
        <div className={this.state.isModalOpen ? "clientLogin" : "clicked clientLogin"}>
            <form  className="form clicked" onSubmit={this.handleLSubmit.bind(this)}>
                <div className="closeBtn" onClick={this.closeModal}><i className="icofont icofont-close"></i></div>
                <div className="h5">sign in</div>
                    <div className="userName"><input  placeholder="Email" type="text"  required value={this.state.email}  onChange={this.setValue.bind(this, 'email')}  /></div>
                    <div className="password"><input  placeholder="Password" type="password"  required value={this.state.password}  onChange={this.setValue.bind(this, 'password')} /></div>

                <input type="submit" value={this.state.condition ? "sign in" : "Register"} />
                <div className="h5">Forgot Passsword? <a href="#">Click here</a></div>
                <div className="logBtm">
                    <div className="h5">Don’t have an account yet?</div>
                    <a href="#" className="signUp" onClick={()=>{this.setState({condition:!this.state.condition})}}>Click here to sign up.</a>
                </div>
            </form>
            </div>
            :
            <div className={this.state.isModalOpen ? "clientLogin" : "clicked clientLogin"}>
            <form  className="form clicked" onSubmit={this.handleRSubmit.bind(this)}>
                <div className="closeBtn" onClick={this.closeModal}><i className="icofont icofont-close"></i></div>
                <div className="h5">sign in</div>
                    <div className="userName"><input  placeholder="Name" type="text"  required value={this.state.name}  onChange={this.setValue.bind(this, 'name')} /></div>
                    <div className="userName"><input  placeholder="Email" type="email"  required value={this.state.email}  onChange={this.setValue.bind(this, 'email')} /></div>
                    <div className="userName"><input  placeholder="Number" type="number"  required value={this.state.number}  onChange={this.setValue.bind(this, 'number')} /></div>
                    <div className="password"><input  placeholder="Password" type="password"  required value={this.state.password}  onChange={this.setValue.bind(this, 'password')} /></div>
                    <div className="password"><input  placeholder="Confirm Password" type="password"  required value={this.state.cpassword}  onChange={this.setValue.bind(this, 'cpassword')} /></div>

                <input type="submit" value={this.state.condition ? "sign in" : "Register"} />
                <div className="h5">Forgot Passsword? <a href="#">Click here</a></div>
                <div className="logBtm">
                    <div className="h5">{this.state.condition ? 'Don’t have an account yet?' : 'If you already have account'}</div>
                    <a href="#" className="signUp" onClick={()=>{this.setState({condition:!this.state.condition})}}>{this.state.condition ? 'Click here to sign up.' :'Click here to login.'}</a>
                </div>
            </form>
            </div>
          }
      </Modal>

      </div>
    );
  }

}

export default withRouter(MainLayout);

const modalStyle = {
	overlay: {
		backgroundColor: 'rgba(0, 0, 0,0.5)'
	}
};

const mainStyle = {
	button: {
    fontWeight:600,
		backgroundColor: '#408cec',
		border: 0,
		padding: '10px 15px',
		color: '#fff',
		width: 150,
		display: 'block',
		borderRadius: 3
	}
};
