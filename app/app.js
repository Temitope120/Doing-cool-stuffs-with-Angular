var myNewApp = angular.module('myAngularProject', ['ngRoute', 'ngAnimate']);


myNewApp.config(['$routeProvider', function($routeProvider){

$routeProvider
    .when('/home', {
    templateUrl: 'views/home.html',
    controller: 'devController'
})
    .when('/devs', {
    templateUrl: 'views/devs.html',
    controller: 'devController'
}).otherwise({
    redirectTo: '/home'
})

}]);



  
// Custom Directive
myNewApp.directive('randomDev', [function(){
// restrict consists of 4 letters: A-Attribute,E-Element,C-classname,M-Comment-. To specify how we want our directive to be used. 
    return{
        restrict: 'E',
        scope:{
            devs: '=',
            title: '=',
            role: '='

        },

        // the template will output whatever is in it.

       // working  well now:

        // template: '<img ng-src="{{devs[random].thumb}}" style="width: 100px">',
        // putting the img into random.html

        // templateurl can be used here too to go to a new view
        templateUrl: 'views/random.html',  
        // to include html from the home.html into random.html, Use the transclude property here, then type the text we want into the home.html but it won't still show until the ng-transclude is used in the random.html on any element, so anything typed into the home.html will go into the element with the ng-transclude .
        transclude: true,
        // to replace the custom directive with an html tag as soon as it's displayed on the browser.The replace property will replace the custom directive with the outermost tag/ its parent tag name instead.
        // not working
        replace: true,

        controller: function($scope){
         // to get random images
            $scope.random = Math.floor(Math.random()*4)
        }
    };
}]);


// another custom directive
// myNewApp.directive('devName', [function(){
//     return{
//         restrict: 'E',
//         scope:{
//             devs: '=',
//             title: '='
//         },

//         template: '{{title}}',

//         controller: function($scope){
            
//         }
//     }
// }]);

myNewApp.controller('devController', ['$scope', '$http', function($scope, $http){    

    // to delete a dev
    $scope.removeDev = function(dev){
        var removedDev =$scope.devs.indexOf(dev);
        $scope.devs.splice(removedDev, 1);
    }


    // adding a new Dev
    $scope.newDev = function(dev) {
        $scope.devs.push({
            name: $scope.newdev.name,
            role: $scope.newdev.role,
            tag: $scope.newdev.tag
        });
         $scope.newdev.name ="";
         $scope.newdev.role ="";
         $scope.newdev.tag ="";
    }



// $http.get('data/devs.json').then(function(data){

//     $scope.devs = data;
// });


$http({
    method : 'get',
    url : 'data/devs.json',
    
}).then(function mySuccess(response){
    $scope.devs = response.data;


});







  // while using json, no need to outcode $scope.devs just convert it into json:
    


    // to use json:Make sure to use this inside the controller and not outside
// console.log(angular.toJson($scope.devs));

// use .then  and not .success bcos of the version of angular higher than 1.4.3

}]);



