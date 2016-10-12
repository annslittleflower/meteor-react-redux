import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';


export default class TaskListComponent extends Component {
  
  componentDidMount() {
    
  }

  componentWillUnmount() {
   
  }


  handleClick(e){
    e.preventDefault();
    const node = findDOMNode(this.refs.taskInput);
    if (node.value === '') return;
    this.props.addTask(node.value);
    node.value = '';
  }

  renderTasks() {
    return (this.props.tasks).map((task, index) => (
        <li key={index}>{task.text}</li>
    ));

  }

  render() {
    return (
      <div>
        <input type='text'
               ref='taskInput'
               autoFocus/>
        <button onClick={this.handleClick.bind(this)}>Add Todo</button>
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}
