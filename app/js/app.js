'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
        'ngRoute',
        'myApp.filters',
        'myApp.services',
        'myApp.directives',
        'myApp.controllers'
    ]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
        $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
        $routeProvider.when('/book', {templateUrl: 'partials/book.html', controller: 'BookCtrl'});
        $routeProvider.when('/booksfile', {templateUrl: 'partials/booksfile.html', controller: 'BookFromFileCtrl'});
        $routeProvider.when('/course', {templateUrl: 'partials/course.html', controller: 'CourseCtrl'});
        $routeProvider.when('/course2', {templateUrl: 'partials/course2.html', controller: 'Course2Ctrl'});
        $routeProvider.when('/coursemulti', {templateUrl: 'partials/course-multi-select.html', controller: 'CourseMultiCtrl'});
        $routeProvider.when('/bookcard', {templateUrl: 'partials/bookcard.html', controller: 'BookCardCtrl'});
        $routeProvider.when('/coursecard', {templateUrl: 'partials/coursecard.html', controller: 'CourseCardCtrl'});
        $routeProvider.when('/courselookup', {templateUrl: 'partials/courselookup.html', controller: 'CourseLookupCtrl'});
        $routeProvider.when('/courselookup2', {templateUrl: 'partials/course-lookup-broken-down.html', controller: 'CourseLookup2Ctrl'});
        $routeProvider.when('/coursecardlookup', {templateUrl: 'partials/coursecard-lookup.html', controller: 'CourseCardLookupCtrl'});
        $routeProvider.when('/merchandisecard', {templateUrl: 'partials/merchandise-card.html', controller: 'MerchandiseCardCtrl'});
        $routeProvider.when('/courselookupmultidropdown', {templateUrl: 'partials/course-lookup-multi-dropdown.html', controller: 'CourseLookupMultiDropdownCtrl'});
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);
