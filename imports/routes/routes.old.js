/**
 * Created by Olivier on 24/03/2017.
 */
import { Meteor } from 'meteor/meteor'
import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

//import Signup from '../ui/Signup'
//import Dashboard from '../ui/Dashboard'
//import NotFound from '../ui/NotFound'
import Login from '../ui/Login'

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/dashboard'];
const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    browserHistory.replace('/dashboard')
  }
};
const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    browserHistory.replace('/')
  }
};
export const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.replace('/dashboard')
  } else if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.replace('/')
  }
};
export const routes = (
  <BrowserRouter>
    <Route path='/' component={Login} />
  {/*<Route path='/signup' component={Signup} onEnter={onEnterPublicPage} />*/}
  {/*<Route path='/dashboard' component={Dashboard} onEnter={onEnterPrivatePage} />*/}
  {/*<Route path='*' component={NotFound} />*/}
  </BrowserRouter>
)