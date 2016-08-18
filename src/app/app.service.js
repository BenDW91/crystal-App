(function () {
  'use strict';

  angular.module('CrystalApp')
    .factory('CrystalService', CrystalService);

  CrystalService.$inject = ['$http', '$q'];

  function CrystalService($http, $q) {
    var service = {
      getConcepts: getConcepts,
      getArtists: getArtists,
      getArtistBio: getArtistBio,
      getCrystalBio: getCrystalBio,
      getConcept: getConcept
    };

    return service;

    function getConcepts() {
      return getData('./temp-data/concepts.json');
    }

    function getArtists() {
      return [
        {}
      ]
    }

    function getCrystalBio() {
      return getData('./temp-data/crystalBio.json');
    }

    function getArtistBio() {
      return [
        {}
      ]
    }

    function getData(url){
      var deferred = $q.defer();

      $http.get(url).then(function(response){
        deferred.resolve(response.data)
      });

      return deferred.promise;
    }

    function getConcept(){
      return getData({name: 'test'});
    }
  }
})();
