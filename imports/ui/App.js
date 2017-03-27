/**
 * Created by Olivier on 26/03/2017.
 */
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';
import { Route, BrowserRouter, Redirect, Switch, Router } from 'react-router-dom';
import {Dashboard} from '../ui/Dashboard';

import React, { Component, PropTypes } from 'react';
import {Graph, GraphWithData} from "./Graph";

export class App extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    if (!this.props.isAuthenticate) {
      this.props.history.push('/login');
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (!this.props.isAuthenticate) {
      this.props.history.push('/login');
    }
  }
  render() {
    return  (<div>Authentified
      <LoginButtons/>
      <Route path={`${this.props.match.path}dashboard`} component={Dashboard}/>
      <GraphWithData/>


    </div>)
  }
  }


// export const App = (props) => {
//   return  (<div>Authentified
//     <LoginButtons/>
//     <Route path={`${props.match.path}dashboard`} component={Dashboard}/>
//
//   </div>)
// };