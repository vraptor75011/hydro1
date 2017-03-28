import { Meteor } from 'meteor/meteor';
import modbus from 'jsmodbus';
import { Hydro1 } from "/imports/api/collections/sensorsData/collection";


// create a modbus client
const client = modbus.client.tcp.complete({
  'host'              : '192.168.10.1',
//  'host'              : 'vraptor75011.hopto.org',
  'port'              : 502,
  'autoReconnect'     : true,
  'reconnectTimeout'  : 1000,
  'timeout'           : 5000,
  'unitId'            : 1
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
  client.readHoldingRegisters(1144, 10).then(
/*
    function (resp) {
      console.log("after", hyd.fetch());
    // resp will look like { fc: 4, byteCount: 20, register: [ values 0 - 10 ], payload: <Buffer> }
    //console.log(resp);
  }
*/
  Meteor.bindEnvironment((resp) => {
    const buf = Buffer.from(["44","1f","ee","14"]);
    console.log(buf.readDoubleBE());

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
  const buf = Buffer.allocUnsafe(4);
  buf.writeUInt16BE("0x441f",0);
  buf.writeUInt16BE("0xee14",2);
//    const buf = Buffer.from(["44","1f","ee","14"]);
    console.log(buf,buf.readFloatBE(),buf.readFloatLE());


    console.log(err);

});
