import { Meteor } from 'meteor/meteor';
import { List } from './list-collection.js';


Meteor.methods({
  'addTask' (task) {
    List.insert({text: task})
  },

  'removeTask'(taskId) {
    List.remove({_id: taskId})
  }
});

