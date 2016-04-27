//var app = angular.module("meetupApp", ["ngResource"]);
app.controller("meetupsController", [ "$scope", "$resource", function($scope, $resource)
	{
		//create rest api
		var Meetup = $resource("/api/meetups");
		/*
		$scope.meetups = [
							{"name": "SF Developer Meet"}, 
							{"name": "Some other meetup"}
						];
						*/
		Meetup.query(function(result){

			$scope.meetups = result;

		});				
		$scope.createMeetUp = function()
		{
			//$scope.meetups.push({name : $scope.MeetupName})
			//$scope.MeetupName = '';
			var meetup = new Meetup();
			meetup.name = $scope.MeetupName;
			meetup.$save(function(result){

				$scope.meetups.push(result);
				$scope.MeetupName= '';
			});

		};

	}]);
/*
//Moved to the above new method
var app = angular.module("meetupApp", []).controller("meetupsController", function($scope)
	{
		//$scope.meetupsCount = 10;
		$scope.meetups = [
							{"name": "SF Developer Meet"}, 
							{"name": "Some other meetup"}
		];
		$scope.createMeetUp = function()
		{
			$scope.meetups.push({name : $scope.MeetupName})
			$scope.MeetupName = '';

		};
	});
	*/
