import { Meteor } from 'meteor/meteor';
import { Todos } from './list-collection.js';

export default function () {
  Meteor.methods({
    'addTask': (task) => {
      Todos.insert(task)
    }
  })
  Meteor.methods({
    'removeTask': (taskId) => {
      Todos.remove({_id: taskId})
    }
  })
}
