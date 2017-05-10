(function() {
    function ModalCtrl($uibModal,$log,Room) {
        this.open(){
            var modalInstance = $uibModal.open({
                animation: true ,
                controller: 'ModalCtrl as modal',
                templateUrl: '/templates/modal.html'
                
                modalInstance.result.then(firstFunction(name){
                    this.room = name;
                    Room.create(this.room);
                
                }, 
                secondFunction(){
                    console.log("dismissed")                           
                                               
                });
                
            
            });
       }
        
        this.toggleAnimation(){
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