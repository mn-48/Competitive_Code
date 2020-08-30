 var myApp = angular.module('myModule', [])
myApp.controller('myCtrl', function($scope){

    var tutorial = {
        title: "Angular Js",
        episode: 'Part 2',
        author: 'Nazmul Hossain'
    }

    $scope.tutorial = tutorial;

    // var fruits = ['Mango', 'pump', 'Apple', 'Orange', 'Banana'];
    // $scope.fruits = fruits;


    $scope.employee = employee;
    // image1 = 'bulb.jpg';
    // $scope.image1 = image1;

 let n = 0;
    $scope.showData = function(a){
        n= n+a;
        n = n%2
        if(n==1){
            $scope.employee = employee;
        }
        if(n==0){
            $scope.employee = '';
        }


        console.log('show Data');
    }

});
