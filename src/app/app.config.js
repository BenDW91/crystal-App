(function(){
  'use strict';

  angular.module('CrystalApp').config(config);

  config.$inject = ['$ionicConfigProvider'];

  function config($ionicConfigProvider){
    $ionicConfigProvider.scrolling.jsScrolling(false);
  }
})();
