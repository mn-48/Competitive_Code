 var myApp = angular.module('myModule', [])
myApp.controller('myCtrl', function($scope, $http){

    var tutorial = {
        title: "Angular Js",
        episode: 'Part 2',
        author: 'Nazmul Hossain'
    }

    $scope.tutorial = tutorial;

    //$http.get('employees.json')
    $http.get('Data.json')
    .then(function(response){
        $scope.employees  = response.data;
    });

//     $log.info("Hello world")
//     console.log("hello world 2")
//     $scope.abc = $location.port();

//     // var fruits = ['Mango', 'pump', 'Apple', 'Orange', 'Banana'];
//     // $scope.fruits = fruits;


//     $scope.employee = employee;
//     // image1 = 'bulb.jpg';
//     // $scope.image1 = image1;

//  let n = 0;
//     $scope.showData = function(a){
//         n= n+a;
//         n = n%2
//         if(n==1){
//             $scope.employee = employee;
//         }
//         if(n==0){
//             $scope.employee = '';
//         }


//         console.log('show Data');
//     }

});
