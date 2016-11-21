angular.module("ecim")
  .controller("MainController", function($scope,$rootScope, $http, CypherResource){
    $rootScope.mainTitle = "ECIM - Mapa de Integración"
    $scope.result = {};

    var handleSuccess = function(data, status) {
        $scope.result = data;
        console.log("TEST -> " + JSON.stringify($scope.result, null, '  '));
    };
    query = "MATCH (n) OPTIONAL MATCH (n)-[r]-() RETURN n,r LIMIT 10"
    CypherResource.getQuery(query).success(handleSuccess);
  })
