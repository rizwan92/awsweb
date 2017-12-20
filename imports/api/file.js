import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
export const FileApi = new Mongo.Collection('file');

Meteor.methods({
  'file.insert'(file) {
  return  FileApi.insert({
      name:file,
      status:1,
      createdAt: new Date(),
    });
  },
  'file.updatedynamic'(userid,field,value) {
      return FileApi.update(userid,{ $set: { [field]: value } });
     },
  'file.update'(userid,image) {
    FileApi.update(userid, {
        $set: { image },
      });  },
  'file.remove'(taskId) {
    check(taskId, String);
    FileApi.remove(taskId);    //Logic to delete the item
  },
  'file.check'(email,password) {
    let user = FileApi.findOne({email,password});
    return user;
  },
  'file.singleitem'(user) {
    let User = FileApi.findOne({_id:user});
    return User;
  }
});
if (Meteor.isServer) {
  Meteor.publish('file', function userPublication(userid) {
    return FileApi.find({_id:userid});
  });
  Meteor.publish('allfile', function userPublication(userid) {
    return FileApi.find({});
  });
}
