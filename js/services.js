angular.module("ecim")
  .factory("CypherResource", function($http){
    return {
      getQuery: function(query){
        return $http.post("http://localhost:7474/db/data/cypher/",
          '{"query": "' + query + '"}')
      }
    }
  })
