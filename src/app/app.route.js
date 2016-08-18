(function () {
  'use strict';

  angular.module('CrystalApp')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'app/home/home.template.html',
          controller: 'homeController'
        })
        .state('about', {
          url: '/about',
          templateUrl: 'app/about/about.template.html',
          controller: 'aboutController'
        })
        .state('artists', {
          url: '/artists',
          templateUrl: 'app/artists/artists.template.html',
          controller: 'artistsController'
        })
        .state('concepts', {
          url: '/concepts',
          templateUrl: 'app/concepts/concepts.template.html',
          controller: 'conceptsController'
        })
        .state('concept', {
          url: '/concept/:conceptId',
          templateUrl: 'app/concept/concept.template.html',
          controller: 'conceptController'
        });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/home');
    }])
})();
