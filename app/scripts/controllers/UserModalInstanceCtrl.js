(function() {
    function UserModalInstanceCtrl($uibModalInstance) {
         this.ok = function(){
            this.username = {name:""};
            $uibModalInstance.close(this.name);
        };
    }

    angular
        .module('blocChat')
        .controller('UserModalInstanceCtrl'["$uibModalInstance",UserModalInstanceCtrl]);
})();