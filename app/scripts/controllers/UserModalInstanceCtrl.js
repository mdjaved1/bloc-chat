(function() {
    function UserModalInstanceCtrl($uibModalInstance,$scope) {
         $scope.ok = function(){
            $uibModalInstance.close($scope.username);
        };
    }

    angular
        .module('blocChat')        .controller('UserModalInstanceCtrl'["$uibModalInstance","$scope",UserModalInstanceCtrl]);
})();