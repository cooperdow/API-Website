var moonData= angular.module("astronomy",["ngRoute"]);

moonData.config(function ($routeProvider)
                  {
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/moon', {
        templateUrl: 'pages/moon.html',
        controller: 'moonController'
    })
    .when('/page2', {
        templateUrl: 'pages/page2.html',
        controller: 'secondController'
    })
});

moonData.controller('homeController', ['$scope', '$http', function($scope, $http){


    $http.get("http://api.burningsoul.in/moon/1428336623")      
    .success(function(outcome)
             {
        console.log(outcome);
        console.log("got it");

            $scope.stage=outcome.stage;
    })

    .error(function(data, status)
             {
        console.log("failed");
    });
}]);

moonData.controller('homeController', ['$scope', '$http', function($scope, $http){
}
moonData.controller('homeController', ['$scope', '$http', function($scope, $http){
}
