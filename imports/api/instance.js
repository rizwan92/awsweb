import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
export const InstanceApi = new Mongo.Collection('instance');

Meteor.methods({
  'instance.insert'(userid,instancedetail) {
  return  InstanceApi.insert({
      userid:userid,
      instancedetail:instancedetail,
      status:1,
      createdAt: new Date(),
    });
  },
  'instance.updatedynamic'(userid,field,value) {
      return InstanceApi.update(userid,{ $set: { [field]: value } });
     },
  'instance.update'(userid,image) {
    InstanceApi.update(userid, {
        $set: { image },
      });  },
  'instance.remove'(taskId) {
    check(taskId, String);
    InstanceApi.remove(taskId);    //Logic to delete the item
  },
  'instance.check'(email,password) {
    let user = InstanceApi.findOne({email,password});
    return user;
  },
  'instance.singleitem'(user) {
    let User = InstanceApi.findOne({_id:user});
    return User;
  }
});
if (Meteor.isServer) {
  Meteor.publish('instance', function userPublication(userid) {
    return InstanceApi.find({_id:userid});
  });
  Meteor.publish('allinstance', function userPublication(userid) {
    return InstanceApi.find({});
  });
}
