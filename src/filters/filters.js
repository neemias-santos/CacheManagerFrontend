const filtersModule = angular.module('myApp.filters', [])

  .filter('asDate', ($filter) => {
    'ngInject';
    return function(input, format) {
      if (input === null) {
        return "";
      }
      return $filter('date')(new Date(input), format ? format : 'dd/MM/yyyy HH:mm:ss');
    };
  });

export default filtersModule;
