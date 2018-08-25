(function () {
    angular
        .module('myApp')
        .controller('rootCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
            $scope.title = 'Angular';

            async function showText() {
                console.log('showText');
                await timeout(2);
                $scope.title = 'is';
                $scope.$apply();
                await timeout(2);
                $scope.title = 'a';
                $scope.$apply();
                await timeout(2);
                $scope.title = 'super';
                $scope.$apply();
                await timeout(2);
                $scope.title = 'lang';
                $scope.$apply();
                await timeout(2);
                $scope.title = 'Angular';
                $scope.$apply();
                console.log("end");
            }
            

            function timeout(sec) {
                return new Promise(resolve => $timeout(resolve, sec * 1000));
            }

            $timeout(showText);
        }]);
}());