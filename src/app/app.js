(function(){
  'use strict';

  angular.module('CrystalApp', ['ionic', 'Home', 'About', 'Concepts', 'Concept', 'Artists', 'Crystal.Templates']);

  angular.module('Home', ['CrystalHeader']);
  angular.module('About', ['CrystalNavBar', 'CrystalHeader']);
  angular.module('Concepts', ['CrystalNavBar', 'CrystalHeader']);
  angular.module('Concept', []);
  angular.module('Artists', ['CrystalNavBar', 'CrystalHeader']);
  angular.module('CrystalNavBar', []);
  angular.module('CrystalHeader', []);

  angular.module('Crystal.Templates', []);
})();
