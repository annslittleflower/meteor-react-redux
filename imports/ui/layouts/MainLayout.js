import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers/index.js'


const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const ContentWrapper = (props) => <div>{props.content()}</div>

const MainLayout = ({ content }) => {
  return <Provider store={store}>
    <ContentWrapper content={content}/>
  </Provider>
};

export default MainLayout
