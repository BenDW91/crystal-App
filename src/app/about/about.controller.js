(function () {
  'use strict';

  angular.module('About')
    .controller('aboutController', aboutController);

  aboutController.$inject = ['CrystalService', '$scope'];

  function aboutController(CrystalService, $scope) {
    CrystalService.getCrystalBio().then(function (response) {
      $scope.crystalBio = response.bio;
    });
  }
})();
