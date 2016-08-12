var myApp = angular.module('userApp',[]);
myApp.service('dataSevice',dataSevice);
dataSevice.$inject = ['$http','$q'];

function dataSevice($http,$q){
    console.log("in the service");
    return {
        getUsers: function() {
            // the $http API is based on the deferred/promise APIs exposed by the $q service
            // so it returns a promise for us by default
            return $http.get('http://jsonplaceholder.typicode.com/users')
                .then(function(response) {
                    console.log("inthe scu",response);
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        // invalid response
                        return $q.reject(response.data);
                    }

                }, function(response) {
                    // something went wrong
                    console.log("response is not coming " + response);
                    return $q.reject(response.data);
                });
        }
    };
}
