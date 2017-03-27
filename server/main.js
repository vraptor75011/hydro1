// import { Meteor } from 'meteor/meteor';
// import PouchDb from 'pouchdb';
// import modbus from 'jsmodbus';
// import NodeCouchDb from 'node-couchdb';
//
//
// Meteor.startup(() => {
// //console.log("before", CouchDB.Database);
//
// });
// process.env.COUCHDB_URL='http://admin:password@127.0.0.1:5984';
// const Hydro1 = new CouchDB.Database("hydro1");
// Meteor.publish("hydro1", function () {
//   console.log(Hydro1.find().count());
//   return Hydro1.find({});
// });
//
// // const localDB = new PouchDb('hydro1'); console.log(localDB);
// // const remoteDB = new PouchDb('http://admin:admin@localhost:5984/hydro_master');
// // localDB.info().then(function (info) {
// //   console.log("LocalDB",info);
// // });
// // remoteDB.info().then(function (info) {
// //   console.log("RemonteDB",info);
// // });
// // localDB.sync(remoteDB, {
// //   live: true,
// //   retry: true
// // }).on('change', function (change) {
// //   console.log("Change", change);
// //   // yo, something changed!
// // }).on('paused', function (info) {
// //   console.log("Paused", info);
// //   // replication was paused, usually because of a lost connection
// // }).on('active', function (info) {
// //   console.log("Active", info);
// //   // replication was resumed
// // }).on('error', function (err) {
// //   console.log("Error", err);
// //   // totally unhandled error (shouldn't happen)
// // });
// // // code to run on server at startup
// //console.log(CouchDB);
// //var hydro1 = new CouchDB.Database("hydro1");
// //console.log(hydro1.find());
// //const hyd = Hydro1.find();
// //console.log("after", Hydro1.find().fetch());
//
// /*
// const couchExternal = new NodeCouchDb({
//   host: '127.0.0.1',
//   protocol: 'http',
//   port: 5986,
//   auth: {
//     user: 'adm',
//     pass: 'adm'
//   }
// });
//
// console.log(couchExternal);
// couchExternal.listDatabases().then(dbs => console.log(dbs), err => {
//   // request error occured
// });
// couchExternal.get("hydro1", "_all_docs").then(({data, headers, status}) => {
//   console.log(data, status);
//   // data is json response
//   // headers is an object with all response headers
//   // status is statusCode number
// }, err => {
//   // either request error occured
//   // ...or err.code=EDOCMISSING if document is missing
//   // ...or err.code=EUNKNOWN if statusCode is unexpected
// });
// */
// // create a modbus client
// const client = modbus.client.tcp.complete({
//   'host'              : '192.168.1.17',
//   'port'              : 1502,
//   'autoReconnect'     : true,
//   'reconnectTimeout'  : 1000,
//   'timeout'           : 5000,
//   'unitId'            : 0
// });
// //console.log(client);
//
// client.connect();
//
//
// // reconnect with client.reconnect()
//
// Meteor.setInterval(
// function () {
//   // client.readHoldingRegisters(0, 10).then(function (resp) {
//   //   // resp will look like { fc: 3, byteCount: 20, register: [ values 0 - 10 ], payload: <Buffer> }
//   //   console.log(resp.register);
//   // }, console.error);
//   client.readHoldingRegisters(0, 10).then(
// /*
//     function (resp) {
//       console.log("after", hyd.fetch());
//     // resp will look like { fc: 4, byteCount: 20, register: [ values 0 - 10 ], payload: <Buffer> }
//     //console.log(resp);
//   }
// */
//   Meteor.bindEnvironment((resp) => {
//
//     Hydro1.insert({
//       "timestamp": new Date(),
//       "resp": resp.register
//     }, (err, id) => {
//       console.log(err, id);
//     });
//
// //      console.log("after", JSON.stringify({"timestamp": new Date()}) ,hyd.fetch());
//       console.log(resp);
//   })
//   , console.error);
//
//
// },1000);
//
// client.on('error', function (err) {
//
//   console.log(err);
//
// });
import "/imports/startup/server";