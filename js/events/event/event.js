angular
  .module('Atreyu.events.event', ['ui.router'])
  .config(RouterConfig);

function RouterConfig($stateProvider){
  $stateProvider
      .state('events.event', {
        url: '/:id',
        templateUrl: 'js/events/event/event.html',
        controller: 'EventController',
        controllerAs: 'event'
      });
}
