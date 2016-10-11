export const addTask = (text) => {
  return () => {
    Meteor.call("addTask", text, (err, res) => {
      if (err) return console.error(err)
    });
  }
}
