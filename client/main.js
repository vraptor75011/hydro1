import { Meteor } from 'meteor/meteor'
import ReactDOM from 'react-dom'
import React from 'react'
import {Hydro1} from "/imports/api/collections/sensorsData/collection";

import ApolloClient from 'apollo-client';
import { meteorClientConfig } from 'meteor/apollo';
import { ApolloProvider } from 'react-apollo';
import { Tracker } from 'meteor/tracker';

import { App } from '/imports/ui/App';
import { routes, onAuthChange } from '/imports/routes/routes';

const client = new ApolloClient(meteorClientConfig());


import "/imports/ui/Graph";

Meteor.startup(() => {

  ReactDOM.render(
    <ApolloProvider client={client}>
      {routes}
    </ApolloProvider>,
    document.getElementById('root'))
});

//const Hydro1 = new CouchDB.Database("hydro1");
Meteor.subscribe("hydro1");
Meteor.setInterval(function() {console.log(Hydro1.find().count())}, 1000);
