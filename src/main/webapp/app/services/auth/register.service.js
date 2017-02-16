(function () {
    'use strict';

    angular
        .module('jhipstersamlApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
