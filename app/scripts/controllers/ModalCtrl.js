(function() {
    function ModalCtrl($uibModal,$log,Room) {
        this.open= function(){
            var modalInstance = $uibModal.open({
                animation: this.animationsEnabled ,
                controller: 'ModalInstanceCtrl as modal',
                templateUrl: '/templates/modal.html'
            });
                
            modalInstance.result.then(function(name){
                this.room = name;
                Room.create(this.room);

            }, 
            function(){
                console.log("dismissed")                           

            });

            
            
       }
        
        this.toggleAnimation= function(){
            if(this.animationsEnabled === true){
                this.animationsEnabled = false ;
            }else{
                this.animationsEnabled = true;
            }
            
            
        };
        
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ["$uibModal","$log","Room",ModalCtrl]);
})();