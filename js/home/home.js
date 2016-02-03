angular
  .module('Atreyu.home', ['ui.router'])
  .config(RouterConfig);

function RouterConfig($stateProvider){
  $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      });
}
