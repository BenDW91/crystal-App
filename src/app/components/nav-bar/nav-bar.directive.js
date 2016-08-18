(function () {
  angular.module('CrystalNavBar')
    .directive('crystalNavBar', function () {
      return {
        controller: 'crystalNavBarController',
        controllerAs: '$ctrl',
        bindToController: true,
        templateUrl: 'app/components/nav-bar/nav-bar.template.html'
      }
    })
})();
