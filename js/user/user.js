angular
  .module('Atreyu.user', ['ui.router'])
  .config(RouterConfig);

function RouterConfig($stateProvider){
  $stateProvider
      .state('user', {
        url: '/user',
        templateUrl: 'js/user/user.html',
        controller: 'UserController',
        controllerAs: 'user'
      });
}
