angular
  .module('Atreyu.events', ['ui.router', 'Atreyu.events.event'])
  .config(RouterConfig);

function RouterConfig($stateProvider){
  $stateProvider
      .state('events', {
        url: '/events',
        templateUrl: 'js/events/events.html',
        controller: 'EventsController',
        controllerAs: 'events'
      });
}
