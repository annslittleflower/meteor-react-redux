
/*export const subscribe = () => {
  return (dispatch, getState, { Meteor, Tracker, Collections }) => {
    let subs = Meteor.subscribe('allTodos');
    let computation = Tracker.autorun(() => {
      if (subs.ready()) {
        dispatch({
          type: "UPDATE_TASK",
          tasks: Collections.Todos.find().fetch(),
        })
      }
    })
    return computation
  }
}

*/

