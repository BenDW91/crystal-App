(function(){
  'use strict';

  angular.module('Concepts')
    .controller('conceptsController', conceptsController);

  conceptsController.$inject = ['CrystalService', '$scope'];

  function conceptsController(CrystalService, $scope){
    CrystalService.getConcepts().then(function(response){
      $scope.concepts = response
    });
  }

})();
