(function(){
    angular
        .module(Core.moduleName)
        .controller('rootCtrl', ['$scope', function($scope){
            $scope.title = 'Angular';
        }]);
}());