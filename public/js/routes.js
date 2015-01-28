angular.module('ballistic').config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/login.html',
    controller: 'LoginRegisterCtrl'
  }).when('/dashboard', {
    templateUrl: 'views/dashboard.html'
  }).when('/account/add', {
    templateUrl: 'views/addaccount.html'
  }).when('/404', {
    templateUrl: 'views/login.html'
  }).otherwise({
    redirectTo: '/404'
  });

  if(window.history && window.history.pushState){
    $locationProvider.html5Mode(true);
  }
});