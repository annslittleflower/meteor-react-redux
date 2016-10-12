export function addTask (text) {
  return (dispatch) => {
    Meteor.call("addTask", text, (err, res) => {
      if (err) return console.error(err);
    });
  }
}
