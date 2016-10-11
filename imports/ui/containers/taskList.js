import React, { Component } from 'react';
import { connect } from 'react-redux';

import TaskListComponent from '../components/taskList.js';
import { subscribe } from  '../actions/allTodosSubscribe.js';
import { addTask } from  '../actions/addTask';

const mapStateToProps = ({tasks}) => {
  return {
    tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    subscribe: () => dispatch(subscribe()),
    addTask: (task) => dispatch(addTask(task)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskListComponent)
