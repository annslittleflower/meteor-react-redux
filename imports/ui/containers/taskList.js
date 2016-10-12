import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { connect } from 'react-redux';
import TaskListComponent from '../components/taskList.js';
import { addTask } from  '../actions/addTask';
import { List } from '/imports/api/lists/list-collection.js';



const TaskListContainer = createContainer(() => {
  const todoSub = Meteor.subscribe('list');
  const list = todoSub.ready() ? List.find({}).fetch() : [];

  return {
    tasks:list
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
