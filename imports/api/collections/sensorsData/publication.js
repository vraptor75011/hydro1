/**
 * Created by Olivier on 26/03/2017.
 */
import { Hydro1 }  from "./collection";

Meteor.publish("hydro1", function () {
  console.log(Hydro1.find().count());
  return Hydro1.find({});
});
