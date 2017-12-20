import React, { Component } from 'react';
import { Session } from 'meteor/session';
import {InstanceApi} from '../../api/instance';
import moment  from 'moment';
var fs = require('fs');
var path = require('path');
var AWS = require('aws-sdk');
var s3 = new AWS.S3({apiVersion: '2006-03-01'});
var ec2 = new AWS.EC2();

class AwsSdkPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buckets:[],
      instance:[],
      filename:'',
      bucketname:'',
    }
  }
  componentWillMount() {
    this.linktracker = Tracker.autorun(() => {
    Meteor.subscribe("allinstance");
    let instance = InstanceApi.find({}).fetch();
    this.setState({instance});
  })
  }

  componentWillUnmount() {
  this.linktracker.stop();
  }


  listBucket(){
    Meteor.call('listBucket',(err,res)=>{
      if (res) {
        this.setState({buckets:res});
      }
    });
    }

    setValue(field, event) {
     let object = {};
     object[field] = event.target.value;
     this.setState(object)
   }

   fileUpload(bucketname,file2){
    var  file1 = file2.target.files[0];
     let myPromise = new Promise(function(resolve,reject){
       var uploadParams = {Bucket: bucketname, Key: '', Body: ''};
       uploadParams.Body = file1;
       uploadParams.Key = file1.name;
       s3.upload (uploadParams, function (err, data) {
       if (err) {
         console.log("Error", err);
         reject (err);
       } if (data) {
         console.log("Upload Success", data.Location);
         resolve (data.Location)
         }
 });
         });
     return myPromise;
   }


   createInstanse1(){
     Meteor.call('createInstanse',(err,res)=>{
       if (res) {
         Meteor.call('instance.insert',Session.get('awsuser')._id,res,(err,res)=>{
           console.log(err);
           console.log(res);
         })
       }
     })
 }
   fileUpload1(bucketname,file){
     Meteor.call('fileUpload',bucketname,file.target.files[0],(err,res)=>{
       console.log(err);
       console.log(res);
     })
   }
    handleSubmit(e){
        e.preventDefault();
        Meteor.call('createS3Bucket',this.state.filename,(err,res)=>{
          if (res) {
            this.listBucket();
          }
        })
    }

  render() {
    return (
      <div>
      <div style={{fontSize:25,color:'blue'}}>{this.state.bucketname}</div>
      <button onClick={this.listBucket.bind(this)}>List of bucket</button>
      <button onClick={this.createInstanse1.bind(this)}>Create Instance</button>
      <form onSubmit={this.handleSubmit.bind(this)}>
      <input value={this.state.filename} onChange={this.setValue.bind(this,'filename')}/>
      <input type="submit" value="create" />
      </form>
      <input type="file" onChange={this.fileUpload.bind(this,this.state.bucketname)} />

      {
        this.state.buckets.length == 0 ? null :
        <div>
        {
          this.state.buckets.map((bucket,i)=>{
            return(
              <p key={i}style={{fontSize:20}} onClick={()=>{this.setState({bucketname:bucket.Name})}}>{bucket.Name + '   '+ moment(bucket.CreationDate).fromNow()}</p>
            )
          })
        }
        </div>
      }
      {
        this.state.instance.length == 0 ? null :
        <div>
        {
          this.state.instance.map((ins,i)=>{
            return(
              <p key={i}style={{fontSize:20}}>{ins.instancedetail.Instances[0].InstanceId
                 + '   '+ moment(ins.createdAt).fromNow()}</p>
            )
          })
        }
        </div>
      }
      </div>
    );
  }

}

export default AwsSdkPage;
