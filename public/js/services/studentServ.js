// js/services/todos.js
angular.module('myApp.Stdservices', [])

    // super simple service
    // each function returns a promise object 
    .factory('studentServ', function($http) {
        return {
            get : function() {
                return 400;//$http.get('/api/todos');
            },
            create : function(todoData) {
                return $http.post('/api/todos', todoData);
            },
            delete : function(id) {
                return $http.delete('/api/todos/' + id);
            }
        }
    

    });
