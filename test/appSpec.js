describe('Testing controller', function() {
    var $scope,$timeout,ctrl,dataSevice,httpBackend;
    //you need to indicate your module in a test
    beforeEach(module('userApp'));

    beforeEach(inject(function($rootScope, $controller,_dataSevice_, _$httpBackend_) {
        $scope = $rootScope.$new();
        dataSevice = _dataSevice_;
        httpBackend = _$httpBackend_;
        ctrl = $controller('userController', {
            $scope: $scope
        });
    }));
    it ('should be loaded', function() {
        // to test to make sure dataService is loaded
        //toBeDefined() is called matchers
        expect(dataSevice).toBeDefined();
    });
    it ('should return get data when calling getUsers', function() {
        var mockdata = {"id": 1};
        httpBackend.when('GET', 'http://jsonplaceholder.typicode.com/users').respond(200,  mockdata);
        dataSevice.getUsers().then(function(result) {
            data = result;
        });
        httpBackend.flush();
        expect(data.id).toBe(1);
    });
});
