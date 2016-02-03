angular
  .module('Atreyu.home')
  .controller('HomeController', HomeController);

function HomeController($scope, Falcor) {

  var self = this;

 Falcor.get('/users', 'greeting')
  .then(function(response){
    self.message = response.greeting;
    $scope.$evalAsync();
  });
}
