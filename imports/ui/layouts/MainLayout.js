import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const MainLayout = ({ content }) => {
  return <div>
    {content()}
  </div>
};

export default MainLayout
