import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import MainLayout from '/imports/ui/layouts/MainLayout.js';
import TaskListContainer from '/imports/ui/containers/taskList.js';

FlowRouter.route('/', {
  name: 'home',
  action() {
    mount(MainLayout, { content: () => '1111' });
  }
});

FlowRouter.route('/list', {
  name: 'list',
  action() {
    mount(MainLayout, { content: () => <TaskListContainer/> });
  }
});
