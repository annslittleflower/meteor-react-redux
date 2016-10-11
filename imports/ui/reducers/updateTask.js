export const updateTask = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: action.tasks
      }
    default:
      return state;
  } 

}
