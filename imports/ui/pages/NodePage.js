import React, { Component } from 'react';
import {FileApi} from '../../api/file';
import {Session} from 'meteor/session';

class NodePage extends Component {
  constructor(){
  super();
  this.state = {
    filename:'',
    file:null,
  }
}

  setValue(field, event) {
   let object = {};
   object[field] = event.target.value;
   this.setState(object)
 }
  handleSubmit(e){
      e.preventDefault();
      Meteor.call('file.insert',this.state.filename,(err,fileid)=>{
        if (fileid) {
          Session.setPersistent('fileid',fileid)
        }
      })
  }
  componentWillMount() {
  this.linktracker = Tracker.autorun(() => {
    Meteor.subscribe("allfile");
    let file = FileApi.findOne({_id:Session.get('fileid')});
    this.setState({file})
  });
  }
  componentWillUnmount() {
  this.linktracker.stop();
  }

  render() {
    console.log(this.state.file);
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <input value={this.state.filename} onChange={this.setValue.bind(this,'filename')}/>
        <input type="submit" value="create" />
        </form>
        <button>creatediv</button>

        {
        this.state.file == null ?  null : <Demo data={this.state.file.div}/>
        }
      </div>
    );
  }

}

export default NodePage;

class Demo extends Component {
  componentDidMount() {
    document.getElementById("demo").innerHTML=this.props.data
  }

  render() {
    return (
      <div className="demo" id="demo">
      </div>
    );
  }

}
