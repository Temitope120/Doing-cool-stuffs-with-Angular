var myNewApp = angular.module('myAngularProject', []);


myNewApp.controller('SchoolController', ['$scope', function($scope){
    $scope.message= "Hello world!";
    $scope.NewMessage = "hey y'all";
    

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

    $scope.devs=
    [  {
        name: "Joshua",
        role: "Frontend Developer",
        tag: "green"
        },

        {
            name: "John",
            role: "Backend Developer",
            tag: "violet"
        },

        {
            name: "Joshua",
            role: "Product Manager",
            tag: "grey"
        },
        {
            name: "Robin",
            role: "Data Scientist",
            tag: "violet"
        },

        {
            name: "Kehinde",
            role: "Product Manager",
            tag: "grey"
        },

        {
            name: "Usman",
            role: "Data Analyst",
            tag: "pink"
        },

        {
            name: "Moses",
            role: "Software Tester",
            tag: "black"
        },

        {
            name: "Adeyanju",
            role: "Software Tester",
            tag: "brown"
        },
        {
            name: "Damilola",
            role: "Frontend Developer",
            tag: "grey"
        }


    ]

}]);

