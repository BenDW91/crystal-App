(function(){
  'use strict';

  angular.module('Concept')
    .controller('conceptController', conceptController);

  conceptController.$inject = ['$stateParams', 'CrystalService', '$scope'];

  function conceptController($stateParams, CrystalService, $scope){
    CrystalService.getConcept($stateParams.conceptId).then(function(response){
      $scope.concept = response;
    });
  }
})();
