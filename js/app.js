/* global angular */
angular.module('Atreyu', ['ui.router',
                          'Atreyu.home',
                          'Atreyu.user',
                          'Atreyu.events'])
  .config(RouterConfig)
  .controller('AppController', AppController);


// Functions
function RouterConfig($locationProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
}

function AppController(){
}
