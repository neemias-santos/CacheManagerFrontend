const configs = angular.module('myApp.configs', [])
    .constant('CONFIG', {
        urlApi: 'http://ultimaterugby.wquest.com.br/api/',
        TYPE_BEER: 1,
        TYPE_BREWERY: 2
    });

export default configs;
