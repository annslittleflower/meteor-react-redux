import React, { Component } from 'react';

export default class TaskListComponent extends Component {
  
  componentDidMount() {
    this.computation = this.props.subscribe();
  }

  componentWillUnmount() {
    this.computation.stop()
  }

  renderTasks() {
    return (this.props.tasks || []).map((task, index) => (
        <li key={index}>{task.text}</li>
    ));

  }

  render() {
     console.log(this.props.tasks + 'hello');
    return (
      <div>
        <input type='text' autoFocus/>
        <button>Add Todo</button>
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}
