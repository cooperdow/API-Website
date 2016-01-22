$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});

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



}]);

moonData.controller('moonController', ['$scope', '$http', function($scope, $http){
    $scope.day = '00';
    $scope.month = '00';
    $scope.year = '0000';

    $("#sub1").click(function() {
        $scope.dat = new Date(parseInt($scope.year), parseInt($scope.month - 1), parseInt($scope.day));
        $scope.date = ($scope.dat.getTime() / 1000);
        console.log($scope.year + " " + ($scope.month - 1) + " " + $scope.day + " " + $scope.date);
        $http.get("http://api.burningsoul.in/moon/" + $scope.date)
            .success(function (outcome) {
                console.log("Success");
                $scope.age = "Age: " + outcome.age.toPrecision(3) + " days";
                $scope.illumination = "Illumination: " + outcome.illumination.toPrecision(4) + "%";
                $scope.stage = "Stage: " + outcome.stage;
            })

            .error(function (data, status) {
                console.log("failed");
            });
    });
}]);
moonData.controller('secondController', ['$scope', '$http', function($scope, $http){

    $http.get("https://data.nola.gov/api/views/mbxb-ejdy/rows.json?accessType=DOWNLOAD")

    .success(function(outcome)
             {
    $scope.callPlacement=[]; 
    $scope.reason=[];    
        console.log("got it");
            for(var i=0; i<outcome.data.length; i++)
            {
            $scope.callPlacement.push(outcome.data[i][9]);
            $scope.reason.push(outcome.data[i][10]);
            }
    })

    .error(function(data, status)
             {
        console.log("failed");
    });
}]);
