import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { Session } from 'meteor/session';
import './css/Check.css';

class CheckPage extends Component {
  constructor(props) {
    super(props);
    this.state ={
      source:'',
      AccessKeyId:'',
      SecretKeyId:'',
      stage:0,
      awsaccount:true,
    } ;
  }

  componentWillMount() {
    Meteor.call('user.check',Session.get('user').email,Session.get('user').password,(err,res)=>{
      if (res) {

          if (res.AccessKeyId == undefined  && res.SecretKeyId == undefined) {
            if (res.source) {
              this.setState({stage:2})
            }
            else {
              this.setState({stage:1})
            }
          }else {
            location.replace("/dashboard");
          }
      }
    })
  }
  showSnackBar(msg){
    var snackbarContainer = document.querySelector('#demo-toast-example');
      var data = {message: msg};
      snackbarContainer.MaterialSnackbar.showSnackbar(data);
  }
  setValue(field, event) {
   let object = {};
   object[field] = event.target.value;
   this.setState(object);
  }
  handleSubmit(event) {
    event.preventDefault();
    let source = this.state.source;
    if (source === '') {
      this.showSnackBar("Select an option");
      return false;
    }
    Meteor.call('user.updatedynamic',Session.get('user')._id,'source',source,(err,res)=>{
      if (res) {
        this.setState({stage:2})
      }
    })
  }
  handleCredentials(event){
    event.preventDefault();
    let AccessKeyId = this.state.AccessKeyId;
    if (AccessKeyId === '') {
      this.showSnackBar("Enter AccessKeyId");
      return false;
    }
    let SecretKeyId = this.state.SecretKeyId;
    if (SecretKeyId === '') {
      this.showSnackBar("Enter SecretKeyId");
      return false;
    }
    Meteor.call('user.updatedynamic',Session.get('user')._id,'AccessKeyId',AccessKeyId,(err,res)=>{
      if (res) {
        Meteor.call('user.updatedynamic',Session.get('user')._id,'SecretKeyId',SecretKeyId,(err,res)=>{
          if (res) {
            this.props.history.push("/dashboard")
          }
        })

      }
    })
  }
  render() {
    return (
      <div>
      <div className="demo-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100">
          <header className="demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800">
            <div className="mdl-layout__header-row">
              <span className="mdl-layout-title">Getting Started</span>
              <div className="mdl-layout-spacer"></div>
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
                <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search">
                </label>
                <div className="mdl-textfield__expandable-holder">
                </div>
              </div>
            </div>
          </header>
          <div className="demo-ribbon"></div>
          <main className="demo-main mdl-layout__content">
            <div className="demo-container mdl-grid">
              <div className="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
              <div className="demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
                <div className="demo-crumbs mdl-color-text--grey-500" >
                </div>

                <div style={{display:'flex',justifyContent:'center',flexFlow:'column',alignItems:'center',width:'100%',height:'100%'}}>
                <h3>{this.state.stage == 1 ? "Select your Source" : this.state.stage == 2 ? "Do You Have AWS Account ? " : null}</h3>

{             this.state.stage == 1 ?
                  <form action="#">
                    <div className="mdl-textfield mdl-js-textfield">
                      <select className="mdl-textfield__input"  id="sample1" onClick={this.setValue.bind(this,'source')}>
                      <option value="">Choose an industry</option>
                      <option value="Affiliate marketing">Affiliate marketing</option>
                      <option value="Author">Author</option>
                      <option value="Beauty/wellness">Beauty/wellness</option>
                      <option value="Blogger">Blogger</option>
                      <option value="Consulting">Consulting</option>
                      <option value="eCommerce">eCommerce</option>
                      <option value="Education and training">Education and training</option>
                      <option value="Entertainment and events">Entertainment and events</option>
                      <option value="Finance">Finance</option>
                      <option value=">Manufacturing">Manufacturing</option>
                      <option value="Marketing and advertising">Marketing and advertising</option>
                      <option value="Media/Publishing">Media/Publishing</option>
                      <option value="Non-profit">Non-profit</option>
                      <option value="Other">Other</option>
                      <option value="Politics">Politics</option>
                      <option value="Recruitment and staffing">Recruitment and staffing</option>
                      <option value="Software/Web App">Software/Web App</option>
                      <option value="Travel/Real Estate">Travel/Real Estate</option>
                      </select>
                    </div>
                  </form>
                  : this.state.stage == 2  ?
                  <div>
                    <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="option-1">
                      <input type="radio" id="option-1" className="mdl-radio__button" name="options" value="1" checked={this.state.awsaccount ? true : false} onChange={()=>{this.setState({awsaccount:true})}}/>
                      <span className="mdl-radio__label">Yes</span>
                    </label>
                    <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="option-2">
                      <input type="radio" id="option-2" className="mdl-radio__button" name="options" value="2" onChange={()=>{this.setState({awsaccount:false})}}/>
                      <span className="mdl-radio__label">No</span>
                    </label>
                  </div>
                  :null
}


                {this.state.stage == 1 ?  <button id="demo-show-toast" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" type="submit" onClick={this.handleSubmit.bind(this)}>
                  submit
                  </button>:null}

                  {this.state.stage == 2 ?
                    this.state.awsaccount ?
                    <form onSubmit={this.handleCredentials.bind(this)}>
                    <div style={{display:'flex',justifyContent:'center',flexFlow:'column',alignItems:'center',width:'100%',height:'100%'}}>
                    <h4>Enter your Credentials</h4>
                      <div className="mdl-textfield mdl-js-textfield">
                        <input className="mdl-textfield__input" type="text" id="sample1" onChange={this.setValue.bind(this,'AccessKeyId')}/>
                        <label className="mdl-textfield__label" htmlFor="sample1">AccessKeyId</label>
                      </div>
                      <div className="mdl-textfield mdl-js-textfield">
                        <input className="mdl-textfield__input" type="text" id="sample1" onChange={this.setValue.bind(this,'SecretKeyId')}/>
                        <label className="mdl-textfield__label" htmlFor="sample1">SecretKeyId</label>
                      </div>
                      <a   target="_blank" href="http://www.google.com" style={{color:'blue',margin:10}}>What is AccessKeyId ?</a>
                      <button id="demo-show-toast" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" type="submit" >Submit</button>
                      </div>
                    </form>
                    :
                    null
                    :null

                  }

                  <div id="demo-toast-example" className="mdl-js-snackbar mdl-snackbar">
                  <div className="mdl-snackbar__text"></div>
                  <button className="mdl-snackbar__action" type="button"></button>
                </div>


                  </div>

              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

}

export default withRouter(CheckPage);
