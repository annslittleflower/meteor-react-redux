import { Meteor } from 'meteor/meteor';
import { List } from '/imports/api/lists/list-collection.js';

Meteor.publish('list', function(){
  return List.find({});
});

