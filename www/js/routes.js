angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('login', {
    url: '/login',
    templateUrl: 'templates/user/login.html',
    controller: 'loginCtrl'
  })

  .state('new-account', {
    url: '/new-account',
    templateUrl: 'templates/user/new-account.html',
    controller: 'newAccountCtrl'
  })

  .state('app', {
    url: '/app',
    templateUrl: 'templates/home/home-tabs.html',
    controller: 'homeCtrl',
    abstract:true
  })

  .state('map-places', {
    url: '/map-places',
    templateUrl: 'templates/home/map-places.html',
    controller: 'mapPlacesCtrl'
  })

  .state('app.search-places', {
    url: '/search-places',
    views: {
      'tab1': {
        templateUrl: 'templates/home/search-places.html',
        controller: ''
      }
    }
  })

  .state('app.home', {
    url: '/home',
    views: {
      'tab2': {
        templateUrl: 'templates/home/list-places.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('app.collections', {
    url: '/collections',
    views: {
      'tab3': {
        templateUrl: 'templates/collections/collections.html',
        controller: 'collectionsCtrl'
      }
    }
  })

  .state('app.collection-details', {
    url: '/collection-details',
    views: {
      'tab3': {
        templateUrl: 'templates/collections/collection-details.html',
        controller: 'collectionDetailsCtrl'
      }
    }
  })

  .state('detail-places', {
    url: '/detail-places',
    templateUrl: 'templates/detail-places.html',
    controller: 'detailPlacesCtrl'
  })

$urlRouterProvider.otherwise('/login')



});
