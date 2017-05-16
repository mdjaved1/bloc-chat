(function() {
    function RoomCtrl(Room,Message,$scope) {
       this.rooms = Room.all;   
       this.changeRoom = function(newRoom){
            $scope.currentRoom = newRoom ;
            $scope.messages = Message.getByRoomId(newRoom.$id);
        }
       this.send = Message.send;
    }
    
   

    angular
        .module('blocChat')
        .controller('RoomCtrl', ["Room","Message","$scope",RoomCtrl]);
})();