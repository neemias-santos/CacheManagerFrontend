import template from './home.component.html';
import controller from './home.controller.js';

import './home.component.scss';

export const HomeComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller,
    controllerAs: 'home'
};
