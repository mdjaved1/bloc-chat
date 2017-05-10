(function() {
    function config($locationProvider, $stateProvider,$uibModal) {
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
        $uibModal
            .open({
            
        })
     }
     angular
         .module('blocChat', ['ui.router', 'firebase','ui.bootstrap'])
         .config(config);
})();
