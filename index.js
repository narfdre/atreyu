// index.js
var falcorExpress = require('falcor-express');
var Router = require('falcor-router');

var express = require('express');
var app = express();


var events = require('./server/events');

app.use('/users', falcorExpress.dataSourceRoute(function (req, res) {
  // create a Virtual JSON resource with single key ("greeting")
  return new Router([
    {
      // match a request for the key "greeting"
      route: "greeting",
      // respond with a PathValue with the value of "Hello World."
      get: function(pathSet) {
        console.log(pathSet);
        return [{path:[pathSet[0]], value: "Hello World"}];
      }
    }
  ]);
}));

app.use('/events', falcorExpress.dataSourceRoute(function (req, res) {
  // create a Virtual JSON resource with single key ("greeting")
  return new Router([
    {
      // route: "eventsById[{keys:eventIds}]['name', 'place']",
      route: "eventsById[{keys:eventIds}][{keys:props}]",
      get: function(pathSet) {
        console.log(pathSet);
        return events.getByIds(pathSet.eventIds)
          .then(function(events){
            var results = [];
            events.forEach(function(event){
              pathSet[2].forEach(function(key){
                results.push({
                  path: [pathSet[0], '' + event._id, key],
                  value: event[key]
                });
              });
            });
            console.log(results);
            return results;
          });
        // return [{path:[pathSet[0]], value: "Hello World"}];
      }
    }
  ]);
}));

// serve static files from current directory
app.use(express.static(__dirname + '/'));

var server = app.listen(3000);
