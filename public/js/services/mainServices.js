// js/services/todos.js
angular.module('myApp.services', [])

    // super simple service
    // each function returns a promise object 
    .factory('MyService', function($http) {
        return {
            get : function() {
                return 123;//$http.get('/api/todos');
            },
            create : function(todoData) {
                return $http.post('/api/todos', todoData);
            },
            delete : function(id) {
                return $http.delete('/api/todos/' + id);
            }
        }
    

    });
