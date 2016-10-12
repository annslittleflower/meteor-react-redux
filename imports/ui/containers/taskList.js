import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { connect } from 'react-redux';
import TaskListComponent from '../components/taskList.js';
import { addTask } from  '../actions/addTask';
import { List } from '/imports/api/lists/list-collection.js';
import { store } from '../store.js';


const TaskListContainer = createContainer(() => {
  let list;
  const todoSub = Meteor.subscribe('list');

  if(todoSub.ready()) {
    list = List.find({}).fetch();

    store.dispatch({
      type: 'UPDATE_TASKS',
      tasks: list
    });

    console.log(store.getState());

  }else {
    list = [];
  }

  return {
    tasks: list
  }
}, TaskListComponent);




const mapStateToProps = () => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (text) => dispatch(addTask(text))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);
