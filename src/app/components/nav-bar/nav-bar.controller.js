(function(){
  'use strict';

  angular.module('CrystalNavBar')
    .controller('crystalNavBarController', crystalNavBarController);

  crystalNavBarController.$inject = ['$ionicHistory', '$state'];

  function crystalNavBarController($ionicHistory, $state) {
    var vm = this;
    vm.current = $state.current.name;

    vm.goBack = goBack;
    vm.goHome = goHome;

    function goBack(){
      $ionicHistory.goBack();
    }

    function goHome() {
      $state.go('home');
    }
  }
})();
