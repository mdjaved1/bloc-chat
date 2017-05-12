(function() {
    function RoomCtrl(Room) {
       this.rooms = Room.all;     
    }
    this.changeRoom = function(newRoom){
        $scope.currentRoom = newRoom ;
        $scope.messages = Message.getByRoomId($scope.currentRoom.$id);
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ["Room",RoomCtrl]);
})();