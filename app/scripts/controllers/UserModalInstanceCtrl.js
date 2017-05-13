(function() {
    function UserModalInstanceCtrl($uibModalInstance) {
         $scope.ok = function(){
            this.name($scope.username) = {name:""};
            $uibModalInstance.close(this.name);
        };
    }

    angular
        .module('blocChat')
        .controller('UserModalInstanceCtrl'["$uibModalInstance",UserModalInstanceCtrl]);
})();