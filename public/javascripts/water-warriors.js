'use strict';
(function(){
    angular.module('waterWorksApp',['ui.router', 'ui.router.util']);
    angular.module('waterWorksApp')
        .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise('/index');
            $stateProvider
                .state('index',{
                    url:'/index',
                    templateUrl:'partials/summary.html'
                })
                .state('leaderboard', {
                    url: '/leaderboard',
                    templateUrl: 'partials/leaderboard.html'
                })
                .state('activity', {
                    url: '/activity',
                    templateUrl: 'partials/activities.html'
                })
        })
        .controller('waterWarriorsController', function($scope){
            $scope.message ='Hello WW';
        });
}());
/*


waterWorksApp.controller('waterWarriorsController', function($scope, $q, FetchData){
    $scope.date = new Date().toLocaleDateString();
    $scope.message ='Greetings';
    var ref = new Firebase("https://water-warriors.firebaseio.com/");
    $scope.activity='';
    $scope.currActivity ='';
    $scope.activityDuration = 1;
    $scope.gallonsUsed = 0;
    console.log($scope.message);


    $scope.setActivity = function(activity){
        $scope.currActivity = activity;
        console.log($scope.currActivity);
    };

    $scope.activityData = [{
        "showering":{
            "units":"gpm",
            "quantity":2
        }
    },
        {
            "toilet":{
                "units":"gpf",
                "quantity":2
            }
        },
        {
            "brushingteeth":{
                "units":"gpm",
                "quantity":1
            }
        },
        {"washinghands":{
            "units":"gpm",
            "quantity":1
        }
        }
    ];
    $scope.user='Person';
    $scope.addActivity = function () {
            ref.child('users/'+$scope.user).push({
                name: $scope.user,
                date: new Date(),
                duration: $scope.activityDuration,
                activity: $scope.currActivity,
                timestamp: Date.now()
            });

    };

    $scope.setDuration = function(value){
        $scope.activityDuration = value;
    };

    $scope.addActivityPromise = function(){
        $scope.addActivity();

    };

    $scope.listActivity = function () {
        var defer = $q.defer();
        ref.child('users').on("value", function(snapshot) {
            $scope.result = snapshot.val();
            defer.resolve();
        });
        return defer.promise;
    };
    $scope.measurement = FetchData.fetchData();
    $scope.split = {};

    $scope.displaySummary = function (username) {
        console.log(username+ "'s Activity: ");
        for (var prop in $scope.result) {
            if (prop === username) {
                //console.log('user: ', $scope.result[prop]);
                if(($scope.result[prop])) {
                    for (var act in $scope.result[prop]) {
                        var activity = $scope.result[prop][act].activity;
                        var duration = $scope.result[prop][act].duration;
                        $scope.gallonsUsed += $scope.measurement[activity]['quantity'] * duration;
                        $scope.split[$scope.result[prop][act].activity] = $scope.measurement[activity]['quantity'] * duration;

                    }
                }
            }
        }
        console.log($scope.split);
     //   $scope.gallonsUsed = 0;
        //console.log($scope.gallonsUsed);
        return $scope.gallonsUsed;
    };



    $scope.listActivity().then(function (data) {
        //console.log('from list ', $scope.result);
        $scope.displaySummary($scope.user);
    }, function () {});

    /***Page route***/
   /* $scope.setIndexPage = function(){
        var index = document.querySelector('#index-content');
        var leadership = document.querySelector('#leadership-content');
        var activities = document.querySelector('#activity-content');
            index.style.display = 'block';
            leadership.style.display ='none';
            activities.style.display = 'none';
    };

    $scope.setLeadershipPage = function(){
        var index = document.querySelector('#index-content');
        var leadership = document.querySelector('#leadership-content');
        var activities = document.querySelector('#activity-content');
        index.style.display = 'none';
        leadership.style.display ='block';
        activities.style.display = 'none';
    };

    $scope.setActivityPage = function(){
        var index = document.querySelector('#index-content');
        var leadership = document.querySelector('#leadership-content');
        var activities = document.querySelector('#activity-content');
        index.style.display = 'none';
        leadership.style.display ='none';
        activities.style.display = 'block';
    };

});


waterWorksApp.factory('FetchData', function () {
    return {
        fetchData: function (){
            return {
                shower: {
                    units: "gpm",
                    quantity: 2
                },
                toilet: {
                    units: "gpf",
                    quantity: 2
                },
                brushing: {
                    units: "gpm",
                    quantity: 1
                },
                handwash: {
                    units: "gpm",
                    quantity: 1
                }
            }
        }
    }
});*/