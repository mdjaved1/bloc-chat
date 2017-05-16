(function() {
    function UserModalInstanceCtrl($uibModalInstance,$scope) {
         $scope.ok = function(isvalid){
             if(isvalid){
                $uibModalInstance.close($scope.username);
             }
        };
    }

    angular
        .module('blocChat')        
        .controller('UserModalInstanceCtrl', ["$uibModalInstance","$scope",UserModalInstanceCtrl]);
})();