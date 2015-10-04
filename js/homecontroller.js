/**
 * Created by User on 25-09-2015.
 */
(function () {
    var app = angular.module("app",[]);
    app.controller("homeController", homeController);
    app.factory("trainingService", trainingService);

    function homeController($scope, trainingService) {

        trainingService.getTrainings().then(function(data){
            $scope.trainings = data;
        });
    }

    function trainingService($http){
        var getTrainings = function(){
            return $http.get("data/trainings.json")
                .then(function(response){
                    return response.data;
                });
        };

        return {
            getTrainings: getTrainings
        };
    }
})();
