export const updateTask = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_TASKS":
      return {
        ...state,
        tasks: action.tasks
      }
    default:
      return state;
  } 

}
