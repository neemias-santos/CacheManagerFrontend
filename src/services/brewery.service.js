class BreweryService {
    constructor($resource, $http, $q, CONFIG) {
        'ngInject'; //Inject necessario para que o angular faca as injecoes as factorys e services
        this.$resource = $resource;
        this.$http = $http;
        this.$q = $q;
        this.CONFIG = CONFIG;
        this.urlApiCustom = this.CONFIG.urlApi + 'brewerys/';
    }

    getListBeersByBrewery(params) {
        const defer = this.$q.defer();

        const resource = this.$resource(this.urlApiCustom, params);

        resource.get().$promise.then((response) => {
            defer.resolve(response.beers);
        }, (error) => {
            defer.reject(error);
        });

        return defer.promise;
    }

    getBrewerySearch(dataForm) {

        const defer = this.$q.defer();

        const resource = this.$resource(this.urlApiCustom + 'get-by-name-brewery/', {name: dataForm.name});

        resource.get().$promise.then((response) => {
            defer.resolve(response);
        }, (error) => {
            defer.reject(error);
        });

        return defer.promise;
    }
}

export default BreweryService;
