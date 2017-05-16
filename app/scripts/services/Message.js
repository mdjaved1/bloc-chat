(function() {
  function Message($firebaseArray,$cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");  
    var messages = $firebaseArray(ref);
      
    Message.getByRoomId = function(roomId) {
       return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
        
    };
      
    Message.send = function(newMessage,currentRoom) {
        var date = new Date();
        var post = {
            content: newMessage,
            roomId : currentRoom.$id ,
            sentAt : date.getHours() + ":" + date.getMinutes()+":"+date.getSeconds(),
            username : $cookies.get('blocChatCurrentUser')
            
        }
        messages.$add(post);
        this.message = "";
    };
      
    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray','$cookies', Message]);
})();