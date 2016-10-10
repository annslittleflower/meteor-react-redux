import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import MainLayout from '/imports/ui/layouts/MainLayout.js';

FlowRouter.route('/', {
  name: 'home',
  action() {
    mount(MainLayout, { content: () => 'hello' });
  }

  /*triggersEnter: [function() {
    FlowRouter.go('/signin')
  }]  */

});
