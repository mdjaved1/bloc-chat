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
            $uibModal.open({
              templateUrl: '/templates/usernamemodal.html',
              controller: 'UserModalInstanceCtrl'
            })
            modalInstance.result.then(function(username){
                 this.username = username ;
                 $uibModalInstance.close();
                })
        }
    } 
     angular
         .module('blocChat', ['ui.router', 'firebase','ui.bootstrap',"ngCookies"])
         .config(config);
         .run(['$cookies', BlocChatCookies]);   
})();
