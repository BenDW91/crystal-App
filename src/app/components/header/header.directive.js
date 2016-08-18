(function () {
  angular.module('CrystalHeader')
    .directive('crystalHeader', function () {
      return {
        scope: {
          type: '@'
        },
        replace: true,
        templateUrl: 'app/components/header/header.template.html'
      }
    })
})();
