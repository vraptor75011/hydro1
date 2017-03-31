/**
 * Created by Olivier on 26/03/2017.
 */
import { Route, BrowserRouter, Redirect, Switch, Router } from 'react-router-dom';
import { AuthenticatedRoute } from '../ui/AuthenticatedRoute';
import {App} from '../ui/App';
import {Login} from '../ui/Login';
import React from 'react';
import { LocaleProvider } from 'antd';
import frFR from 'antd/lib/locale-provider/fr_BE';

const unauthenticatedPages = ['/', '/signup'];

export const onAuthChange = (isAuthenticated) => {
  const pathname = Router.history.location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);

  if (!isUnauthenticatedPage && !isAuthenticated) {
    Router.history.replace('/')
  }
};


export const routes = (
  <BrowserRouter>
    <LocaleProvider locale={frFR}>
      <div>
        <Route exact path="/" component={Login}/>
        <AuthenticatedRoute component={App}/>
      </div>
    </LocaleProvider>
  </BrowserRouter>
);
