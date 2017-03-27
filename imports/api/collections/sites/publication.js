/**
 * Created by Olivier on 26/03/2017.
 */
import { Sites }  from "./collection";

Meteor.publish("sites", function () {
  console.log(Sites.find().count());
  return Sites.find({});
});
