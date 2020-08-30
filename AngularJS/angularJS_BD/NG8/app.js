 var myApp = angular.module('myModule', ['ngRoute'])
myApp.controller('myCtrl', function($scope){

    var tutorial = {
        title: "Angular Js",
        episode: 'Part 8',
        author: 'Nazmul Hossain'
    }

    $scope.tutorial = tutorial;
    
     
});

myApp.config(function($routeProvider){
    $routeProvider
    .when('/Bangladesh',{
        templateUrl:'templates/Bangladesh.html',
        controller:'myCtrl2'
    })
    .when('/India', {
        templateUrl:'templates/India.html',
        controller:'myCtrl2'
    })
    .when('/Pakisthan', {
        templateUrl:'templates/Pakisthan.html',
        controller:'myCtrl2'
    })
    .when('/Nepal', {
        templateUrl:'templates/Nepal.html',
        controller:'myCtrl2'
    });
    

});

myApp.controller('myCtrl2', function($scope){
    $scope.Bangladesh = "Hello Bangladesh";
    $scope.India = "Hello India";
    $scope.Pakisthan = "Hello Pakisthan";
    $scope.Nepal = "Hello Nepal";
});