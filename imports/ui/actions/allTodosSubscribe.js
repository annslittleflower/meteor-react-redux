import { Tracker } from 'meteor/tracker';

import { List } from '../../api/lists/list-collection.js';

export const subscribe = () => {
  return (dispatch, getState) => {
    let subs = Meteor.subscribe('list');
    let computation = Tracker.autorun(() => {
      if (subs.ready()) {
        dispatch({
          type: "UPDATE_TASK",
          tasks: List.find().fetch()
        })
        console.log(getState());
      }
    })
    return computation
  }
}


