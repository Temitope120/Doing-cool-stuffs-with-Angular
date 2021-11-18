var myNewApp = angular.module('myAngularProject', ['ngRoute']);


myNewApp.config(['$routeProvider', function($routeProvider){

$routeProvider
    .when('/home', {
    templateUrl: 'views/home.html'
})
    .when('/devs', {
    templateUrl: 'views/devs.html',
    controller: 'devController'
}).otherwise({
    redirectTo: '/home'
})

}]);



  



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


    $scope.schools = ['Adekunle Ajasin', 'TASUED', 'Babcock ','Lasu'];
    $scope.menuList= ["Rice", "jollof", "cocktail"];


    // while using json, no need to outcode this:
    // $scope.devs=
    // [  {
    //     name: "Joshua",
    //     role: "Frontend Developer",
    //     tag: "green"
    //     },

    //     {
    //         name: "John",
    //         role: "Backend Developer",
    //         tag: "violet"
    //     },

    //     {
    //         name: "Joshua",
    //         role: "Product Manager",
    //         tag: "grey"
    //     },
    //     {
    //         name: "Robin",
    //         role: "Data Scientist",
    //         tag: "violet"
    //     },

    //     {
    //         name: "Kehinde",
    //         role: "Product Manager",
    //         tag: "grey"
    //     },

    //     {
    //         name: "Usman",
    //         role: "Data Analyst",
    //         tag: "pink"
    //     },

    //     {
    //         name: "Moses",
    //         role: "Software Tester",
    //         tag: "black"
    //     },

    //     {
    //         name: "Adeyanju",
    //         role: "Software Tester",
    //         tag: "brown"
    //     },
    //     {
    //         name: "Damilola",
    //         role: "Frontend Developer",
    //         tag: "grey"
    //     }


    // ]


    // to use json:Make sure to use this inside the controller and not outside
// console.log(angular.toJson($scope.devs));

$http.get('data/devs.json').success(function(data){

    $scope.devs = data;
});
}]);



