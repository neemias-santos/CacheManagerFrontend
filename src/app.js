import angular from 'angular';
import Configs from './config';
import Filters from './filters/filters';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import uiBootstrap from 'angular-ui-bootstrap';
import Components from './components/components';
import Directives from './directives/directives';
import { HomeComponent } from './home/home.component';
import BeersService from './services/beers.service';
import BreweryService from './services/brewery.service';

angular.module('myApp', [
  'ui.bootstrap',
  uiRouter,
  uiBootstrap,
  ngResource,
  Components.name,
  Configs.name,
  Filters.name,
  Directives.name
])
    .component('homePage', HomeComponent)
    .service('BeersService', BeersService)
    .service('BreweryService', BreweryService)
    .config(($stateProvider) => {
      'ngInject';
      $stateProvider
            .state('home', {
              url: '',
              template: '<home-page></home-page>'
            });
    });
