class HomeController {
    constructor($scope, $rootScope, $http, $resource, $filter, $location, $anchorScroll, BeersService, BreweryService, CONFIG) {
        'ngInject';

        this.name = 'HomeController';
        this.$http = $http;
        this.$scope = $scope;
        this.CONFIG = CONFIG;
        this.$filter = $filter;
        this.$resource = $resource;
        this.$location = $location;
        this.$rootScope = $rootScope;
        this.$anchorScroll = $anchorScroll;
        this.BeersService = BeersService;
        this.BreweryService = BreweryService;
        this.dataForm = {};

        this.searchBeers();
    }

    searchBeers() {
        this.BeersService.getListBeers().then((response) => {
            this.$scope.beers = response;
            this.$scope.mainBeer = response[Math.floor(Math.random() * response.length)];
        });
    }

    moreBeer(beerId) {
        this.$scope.mainBeer = this.$scope.beers.filter((beers) => beers.id === beerId)[0];
        this.$location.hash('mainBeer');
        this.$anchorScroll();
    }

    moreBeerBrewery(breweryId) {
        const params = {breweryId: breweryId};

        this.BreweryService.getListBeersByBrewery(params).then((response) => {
            this.$scope.beers = response;
        });
        this.$location.hash('beerList');
        this.$anchorScroll();
    }

    formBeer(dataForm) {

        if (dataForm.type == this.CONFIG.TYPE_BEER) {

            this.BeersService.getBeerSearch(dataForm).then((response) => {
                this.$scope.mainBeer = response;
                this.$location.hash('mainBeer');
                this.$anchorScroll();
            });
        }
        if (dataForm.type == this.CONFIG.TYPE_BREWERY) {
            this.BreweryService.getBrewerySearch(dataForm).then((response) => {
                this.$scope.beers = response.beers;
                this.$scope.mainBeer = response.beers[Math.floor(Math.random() * response.beers.length)];
                this.$location.hash('mainBeer');
                this.$anchorScroll();
                this.$scope.dataForm = {};
            });
        }
    }


}

export default HomeController;
