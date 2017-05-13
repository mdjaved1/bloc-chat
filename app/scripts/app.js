(function() {
    function config($locationProvider, $stateProvider) {
         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
              });
 
         $stateProvider             
             .state('room',{
                url:'/',
                controller: 'RoomCtrl as room',
                templateUrl: '/templates/home.html'

             });
     }
     function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
           var modalInstance = $uibModal.open({
              templateUrl: '/templates/usernamemodal.html',
              controller: 'UserModalInstanceCtrl as modalUN'
            })
            modalInstance.result.then(function(username){
                 this.username = username ;
                 $cookies.put('blocChatCurrentUser', this.username)
                })
        }
    } 
     angular
         .module('blocChat', ['ui.router', 'firebase','ui.bootstrap',"ngCookies"])
         .config(config);
         .run(['$cookies', BlocChatCookies]);   
})();
