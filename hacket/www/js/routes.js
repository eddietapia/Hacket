angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('hacket2.hacket', {
    url: '/homepage',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hacket.html',
        controller: 'hacketCtrl'
      }
    }
  })

  .state('hacket2.bikeSession', {
    url: '/bikesession',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bikeSession.html',
        controller: 'bikeSessionCtrl'
      }
    }
  })

  .state('hacket2.musicSession', {
    url: '/musicsession',
    views: {
      'side-menu21': {
        templateUrl: 'templates/musicSession.html',
        controller: 'musicSessionCtrl'
      }
    }
  })

  .state('hacket2', {
    url: '/menu',
    templateUrl: 'templates/hacket2.html',
    controller: 'hacket2Ctrl'
  })

  .state('hacket2.signOut', {
    url: '/signout',
    views: {
      'side-menu21': {
        templateUrl: 'templates/signOut.html',
        controller: 'signOutCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/menu/homepage')

  

});