import { combineReducers } from 'redux'
import { updateTask }  from './updateTask.js'


export const rootReducer = combineReducers({
  updateTask: updateTask
})
