import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Provider } from 'react-redux';
import { store } from '../store.js';

const ContentWrapper = (props) => <div>{props.content()}</div>

const MainLayout = ({ content }) => {
  return <Provider store={store}>
    <ContentWrapper content={content}/>
  </Provider>
};

export default MainLayout
