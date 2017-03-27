/**
 * Created by Olivier on 26/03/2017.
 */
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { Meteor } from 'meteor/meteor'
import React from 'react';

import { createContainer } from 'meteor/react-meteor-data';

const withAuthentification = (component) => {
  return (
  createContainer(() => {
    const isAuthenticate = Meteor.userId();
    console.log("create",isAuthenticate);
    return {
      isAuthenticate
    };
  }, component));
};

const LogOut = (component) => {
//  console.log(component.props.isAuthenticate);
  return (component)
};

export const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  console.log("auth", !Meteor.userId(), rest);
  const Auto = withAuthentification(Component);
  return (
  <Route {...rest} render={(props) => (!Meteor.userId() ? (<Redirect to="/"/>) : (<Auto {...props}/>))}/>
)};
