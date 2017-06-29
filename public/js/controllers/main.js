

angular.module('myApp.controllers', []).
    controller('customersCtrl',['$scope','MyService','studentServ',function($scope,MyService,studentServ){
        $scope.myService = studentServ; // found in services.js
        console.log($scope.myService.get());
        $scope.neww = 1234;
    }
]);

     
