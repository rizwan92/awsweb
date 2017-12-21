import { Meteor } from 'meteor/meteor';
import '../imports/api/user';
import '../imports/api/file';
import '../imports/api/createinstance';
import '../imports/api/instance';
import { Email } from 'meteor/email'
var fs = require('fs');
var path = require('path');
var AWS = require('aws-sdk');
AWS.config.update({
    accessKeyId: "",
    secretAccessKey: "",
    "region": "us-west-2"
});
var s3 = new AWS.S3({apiVersion: '2006-03-01'});
var ec2 = new AWS.EC2();

Meteor.startup(() => {


  process.env.MAIL_URL = 'smtp://AKIAIMEBZQMPGXVSV3OQ:AhNQm+zZJVB7uxvcSjqjmCEsZnwA2FREXIQSDWwB7wiI@email-smtp.us-east-1.amazonaws.com:25';
});
Meteor.methods({
  sendEmail(to, from, subject, text) {
    return Email.send({ to, from, subject, text });
  }
});

Meteor.methods({
  listBucket(){
    let myPromise = new Promise(function(resolve,reject){
      s3.listBuckets(function(err, data) {
      if (err) {
          reject (err);
       } else {
          resolve (data.Buckets);
        }
      });
      });
    return myPromise;
  }
});
 function createMyVPC() {
  let vpc = null;
  let myvpcpromise = new Promise(function(resolve,reject){
    ec2.describeVpcs(function(err, data) {
       if (err) {
          console.log("Cannot retrieve a VPC", err);
          reject(err);
       } else {
          vpc = data.Vpcs[0].VpcId;
          resolve (vpc);
       }
    });
  })
  return myvpcpromise
}
function createMySecurityGroup(vpc) {
  let mysgpromise = new Promise(function(resolve,reject){
    let date = new Date();
    var paramsSecurityGroup = {
   Description: 'myDESCRIPTION',
   GroupName: date.toString(),
   VpcId: vpc
};

ec2.createSecurityGroup(paramsSecurityGroup, function(err, data) {
   if (err) {
      console.log("Error Creating Security Group", err);
      reject (err);
   } else {
      var SecurityGroupId = data.GroupId;
      console.log("Security Group Created", SecurityGroupId);
      resolve (SecurityGroupId)
      var paramsIngress = {
        GroupName: date.toString(),
        IpPermissions:[
           { IpProtocol: "tcp",
             FromPort: 80,
             ToPort: 80,
             IpRanges: [{"CidrIp":"0.0.0.0/0"}]},
          { IpProtocol: "tcp",
             FromPort: 22,
             ToPort: 22,
             IpRanges: [{"CidrIp":"0.0.0.0/0"}]}
        ]
      };
      ec2.authorizeSecurityGroupIngress(paramsIngress, function(err, data) {
        if (err) {
          console.log("Error", err);
          reject (err);
        } else {
          console.log("Ingress Successfully Set", data);
        }
     });
   }
});
  })
  return mysgpromise;
}
var userData= `#!/bin/bash
yum update -y
yum install -y httpd
yum install -y php
yum install -y mysql-server
yum install -y mysql
service httpd start
chkconfig httpd on
groupadd www
usermod -a -G www ec2-user
chown -R root:www /var/www
chmod 2775 /var/www
find /var/www -type d -exec chmod 2775 {} +
find /var/www -type f -exec chmod 0664 {} +
echo "<?php phpinfo(); ?>" > /var/www/html/phpinfo.php
`

var userDataEncoded = new Buffer(userData).toString('base64');
  function createMyInstance(securityid){
     let mynewPromise = new Promise (function(resolve,reject){
       ec2.runInstances({
                              ImageId: 'ami-bf4193c7',
                              MaxCount: 1,
                              MinCount: 1,
                              BlockDeviceMappings: [
                                  {
                                      DeviceName: '/dev/xvda',
                                      Ebs: {
                                          DeleteOnTermination: true,
                                          VolumeSize: 11
                                      }
                                  }
                              ],
                              InstanceType: 't2.micro',
                               KeyName: 'newone',
                              SecurityGroupIds: [securityid],
                              UserData: userDataEncoded,
                          }, function(err, data) {
                              if (err) {
                                 console.log("Could not create instance", err);
                                 reject(err)
                                  return;
                              }else{
                console.log('instances started');
                resolve(data);
                }
     })

     });
     return mynewPromise;
  }

Meteor.methods({
  createInstanse (){
    let myoriginalpromise = new Promise (function(resolve,reject){
      let vpc = createMyVPC().then((result)=>{
        createMySecurityGroup(result).then((result)=>{
          console.log(result.toString());
          createMyInstance(result).then((result)=>{
            console.log(result);
            resolve(result)
          }).then((err)=>{
            reject(err)
          })
        }).then((err)=>{
          console.log("error in sg"+err);
        })
      }).then((err)=>{
        console.log("error in vpc"+err);
      })
    })
    return myoriginalpromise;
  }
  });
Meteor.methods({
  createS3Bucket(filename){
    let myPromise = new Promise(function(resolve,reject){
      var bucketParams = {
         Bucket : filename,
      };
      s3.createBucket(bucketParams, function(err, data) {
         if (err) {
            reject (err);
         } else {
          resolve (data.Location);
         }
      });
    });
    return myPromise;
  }
});
Meteor.methods({
  fileUpload(bucketname,file1){
    console.log(bucketname);
    console.log(file1);
    let myPromise = new Promise(function(resolve,reject){
      var uploadParams = {Bucket: bucketname, Key: '', Body: ''};
      var fileStream = fs.createReadStream(file1);
      fileStream.on('error', function(err) {
        reject (err);
      });
      console.log(fileStream);
      uploadParams.Body = fileStream;
      uploadParams.Key = path.basename(file1);
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
});
Meteor.methods({
    createFile(filename){
      var rootDir = process.cwd() + '/assets/';
      var fileName = filename + '.js';
      var filepath = rootDir + fileName;
      fs.writeFileSync(filepath, `import React, { Component } from 'react';
  class ${filename}  extends Component {
    constructor(props) {
      super(props);
        this.state = {};
        }
     render() {
        return (
          <div>
            ${filename}
          </div>
        );
      }
    }
   export default ${filename};`
   ,(err,data)=>{
        console.log(err);
        console.log(data);
      });
     }
});
Meteor.methods({
    readFile(filename){
      var rootDir = process.cwd() + '/assets/';
      var fileName = filename + '.js';
      var filepath = rootDir + fileName;
      console.log(filepath);
      fs.readFile(filepath, 'utf8', function (err,data) {
        if (err) {
          return err;
        }
        return data.toString();
      });
    }
});
