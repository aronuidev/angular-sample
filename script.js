angular.module('userApp').controller('userController', userController).filter('sortUserNamesFltr', sortUserNamesFltr);
userController.$inject = ['dataSevice'];
function userController(dataSevice) {
    var vm = this;
    vm.usersData = [];
    vm.userNames = [];
    vm.userSortOptions = ['id', 'email', 'name', 'username', 'website'];
    dataSevice.getUsers().then(function (data) {
        vm.usersData = data;
    });
    
}
function sortUserNamesFltr() {
    return function (users, selectedType) {
        //checking if users and selectedType are defined or not.
        if (!angular.isUndefined(users) && !angular.isUndefined(selectedType) && selectedType.length > 0) {
            var tempUsers = [];
            angular.forEach(users, function (user) {
                tempUsers.push(user);
            });
            tempUsers.sort(function (a, b) {
                var alc = !isNaN(a[selectedType]) ? a[selectedType] : a[selectedType].toLowerCase(),
                    blc = !isNaN(b[selectedType]) ? b[selectedType] : b[selectedType].toLowerCase();
                return alc > blc ? 1 : alc < blc ? -1 : 0;
            });
            return tempUsers;
        } else {
            return users;
        }
    };
};
