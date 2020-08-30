 var myApp = angular.module('myModule', [])
myApp.controller('myCtrl', function(myFactory,myService,$scope, $interval){

    var tutorial = {
        title: "Angular Js",
        episode: 'Part 2',
        author: 'Nazmul Hossain'
    }

    $scope.tutorial = tutorial;
    $scope.myFunc= function(x,y){
        console.log(x,y);

        $scope.result = myService.sum(x,y)
        $scope.result2 = myFactory.product(x,y)
 
    }
     
});

myApp.service("myService",function(){
    this.sum = function(x,y){
        return Number(x)+Number(y);
    };
});


myApp.factory("myFactory",function(){

    let obj = {};
    obj.product = function(x,y){
        return Number(x)*Number(y);
    };
    
    return obj;
});