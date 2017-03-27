/**
 * Created by Olivier on 27/03/2017.
 */
import React from "react";
import {Hydro1} from "/imports/api/collections/sensorsData/collection";
import { createContainer } from 'meteor/react-meteor-data';

export class Graph extends React.Component {
  componentDidMount() {
    var seriesData = [ [{ x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 17 }, { x: 3, y: 42 }] ];
//    var seriesData = this.props.hydro1;
    console.log(this.props.hydro1);

    var graph = new Rickshaw.Graph( {
      element: document.querySelector("#chart_container"),
      width: 940,
      height: 250,
      renderer: 'area',
      stroke: true,
      series: [
        {
          color: 'steelblue',
          data: seriesData[0],
          name: 'SMS per minute'
        }
      ]
    });
    graph.render();

  }
  componentWillUpdate() {
    console.log(this.props.hydro1);
//    graph.update();

  }

  render() {
    return(
      <div>
      <div id="chart_container" />
      <p>{this.props.hydro1.length}</p>
      </div>
    )
  }
};

const withData = (component) => {
  return (
    createContainer(() => {
      return {
        hydro1: Hydro1.find().map(function(doc) {return {x: doc.timestamp, y: doc.resp[0]}})
      };
    }, component));
};


export const GraphWithData = withData(Graph);

// var getLatestData = function(){
//   jQuery.ajax({
//     url: "/data.json",
//     type: "GET",
//     data: {
//       campaign_id : <?= $campaignId; ?>,
//   most_recent : mostRecent
//   },
//   dataType: "json",
//   success: function(newData, textStatus, jqXHR){
//     seriesData[0].push( { x: newData.x, y: newData.y } );
//     graph.update();
//   }
//   });
//   };
//
//   setInterval( function() {
//     getLatestData();
//
//   }, 60000 );