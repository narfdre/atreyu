angular.module('Atreyu.events.event')
  .controller('EventController', EventController);

function EventController($stateParams, $scope) {
  var self = this;
  this.id = $stateParams.id;
  self.event = $scope.$parent.events.events[this.id];
}
