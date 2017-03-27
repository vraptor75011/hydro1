import { Meteor } from 'meteor/meteor';
import modbus from 'jsmodbus';
import { Hydro1 } from "/imports/api/collections/sensorsData/collection";


// create a modbus client
const client = modbus.client.tcp.complete({
  'host'              : '192.168.1.17',
//  'host'              : 'vraptor75011.hopto.org',
  'port'              : 1502,
  'autoReconnect'     : true,
  'reconnectTimeout'  : 1000,
  'timeout'           : 5000,
  'unitId'            : 0
});
//console.log(client);

client.connect();


// reconnect with client.reconnect()

Meteor.setInterval(
function () {
  // client.readHoldingRegisters(0, 10).then(function (resp) {
  //   // resp will look like { fc: 3, byteCount: 20, register: [ values 0 - 10 ], payload: <Buffer> }
  //   console.log(resp.register);
  // }, console.error);
  client.readHoldingRegisters(0, 10).then(
/*
    function (resp) {
      console.log("after", hyd.fetch());
    // resp will look like { fc: 4, byteCount: 20, register: [ values 0 - 10 ], payload: <Buffer> }
    //console.log(resp);
  }
*/
  Meteor.bindEnvironment((resp) => {

    Hydro1.insert({
      "timestamp": new Date(),
      "resp": resp.register
    }, (err, id) => {
      console.log(err, id);
    });

//      console.log("after", JSON.stringify({"timestamp": new Date()}) ,hyd.fetch());
      console.log(resp, new Date());
  })
  , console.error);


},1000);

client.on('error', function (err) {

  console.log(err);

});
