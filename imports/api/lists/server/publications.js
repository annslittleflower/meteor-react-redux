import { Meteor } from 'meteor/meteor';
import { List } from '/imports/api/lists/list-collection.js';

Meteor.publish('allTodos', function(){
  return List.find({});
});

