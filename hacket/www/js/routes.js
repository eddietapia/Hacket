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

  /*.state('hacket2.bikeSession.stopCtrl', {
    views: {
      'side-menu':{
        templateUrl: 'templates/bikeSession.html',
        controller: 'bikeSessionCtrl'
      }
    }
  })*/

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

  .state('hacket2.february172017', {
    url: '/feb17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/february172017.html',
        controller: 'february172017Ctrl'
      }
    }
  })

  .state('hacket2.february152017', {
    url: '/feb15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/february152017.html',
        controller: 'february152017Ctrl'
      }
    }
  })

  .state('hacket2.february142017', {
    url: '/feb14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/february142017.html',
        controller: 'february142017Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/menu/homepage')



});
