/**
 * Created by Neemias on 27/08/2017.
 */


const directivesModule = angular.module('myApp.directives', [])

    .directive('ngConfirmClick', [
        function () {
            return {
                link: function (scope, element, attr) {
                    const msg = attr.ngConfirmClick || "Are you sure?";
                    const clickAction = attr.confirmedClick;
                    element.bind('click', function (event) {
                        if (window.confirm(msg)) {
                            scope.$eval(clickAction)
                        }
                    });
                }
            };
        }]);

export default directivesModule;
