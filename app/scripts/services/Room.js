(function() {
  function Room($firebaseArray) {
    var Room = {};
    var room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.add = function(room) {
        //Use the firebase method $add here
        room.$add({});
    } 

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();