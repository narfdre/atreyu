angular.module('Atreyu.events')
  .controller('EventsController', EventsController);

function EventsController($scope, Falcor) {

  var self = this;

  Falcor.get('/events', 'eventsById', ['557bc8cf2130450d1d5c9462', '557df6f5d847a0875b9259e4'], ['name', 'place', 'notes', 'date'])
   .then(function(response){
     self.events = response.eventsById;
     $scope.$evalAsync();
   });

}
