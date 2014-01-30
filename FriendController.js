app.controller('friendsCtrl', function($scope, $http){
    $http.get('https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json').success(function(data){
        $scope.friends = data.results;
        angular.forEach($scope.friends, function(value, key){
            value.friend_count = parseInt(value.friend_count);
        });

        $scope.searchTerm = null;
        $scope.sortingVar = 'name';
        $scope.ascDesc = true;

    });
});





