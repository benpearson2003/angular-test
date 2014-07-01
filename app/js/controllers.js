'use strict';

/* Controllers */

angular.module('myApp.controllers', ['ui.bootstrap', 'wu.masonry', 'ui.utils'])
    .controller('MyCtrl1', [function () {

    }])
    .controller('MyCtrl2', [function () {
        /*used for multiple views, essentially different pages*/
    }])
    .controller('BookCtrl', [function () {
        /*display info from hard coded data*/
        this.books = [

            {
                'name': 'Campbell Biology',
                'isbn': '9780321558237',
                'author': 'Reece',
                'publisher': 'Pearson',
                'edition': '9th',
                'prices': [
                    {
                        'used': '89.95',
                        'new': '130.82',
                        'rental': '55.55'
                    }
                ],
                'image': 'http://ecx.images-amazon.com/images/I/41UWC4kbxGL._SL160_.jpg',
                'required': 'Optional'
            }
        ];
        this.t = 'handle';
        this.second =
            {
                'enable': 'yes',
                'direction': 'north'
            };
        this.thirds = [{'tree': 'pine'},{'tree': 'oak'}];

    }])
    .controller('BookFromFileCtrl', function ($scope, $http) {
        this.turtle = 'snapper';
        /* pulls data from a json file (could be used similarly for an external source or wherever */
        $http.get('data/books.json').success(function(data) {
            $scope.books = data;
        });
    })
    .controller('BookCardCtrl', function ($scope, $http) {
        $http.get('data/books.json').success(function(data) {
            $scope.books = data;
        });
        $scope.radioModel = 'Rent';
        $scope.buyCollapse = true;
        $scope.rentCollapse = false;
        $scope.radioModel2 = 'None';
    })
    .controller('CourseCtrl', function ($scope, $http) {
        $http.get('data/course.json').success(function(data) {
            $scope.courses = data;
        });
    })
    .controller('Course2Ctrl', function ($scope, $http) {
        $http.get('data/course.json').success(function(data) {
            $scope.courses = data;
        });
    })
    .controller('CourseMultiCtrl', function ($scope, $http) {
        $http.get('data/course-multi-select.json').success(function(data) {
            $scope.courses = data;
            $scope.buyrent = "buy";
        });
    })
    .controller('CourseCardCtrl', function ($scope, $http) {
        $http.get('data/course-card-ui.json').success(function(data) {
            $scope.courses = data;
        });
        $scope.radioModel = 'Rent';
        $scope.buyCollapse = true;
        $scope.rentCollapse = false;
        $scope.radioModel2 = 'None';

        $scope.products =[];
        $scope.addProducts = function(){
            $scope.products.push({isbn:$scope.isbn, option: $scope.option})
        }
    })
    .controller('CourseLookupCtrl', function ($scope, $http) {
        $http.get('data/uca-course-data.json').success(function(data) {
            $scope.schedule = data;
        });
    })
    .controller('CourseLookup2Ctrl', function ($scope, $http, courseCart) {
        $http.get('data/courses-broken-down.json').success(function(data) {
            $scope.schedule = data;
        });
        $scope.coursesAdded = [];
        $scope.schoolSelector = 'Not a school';
        $scope.deptSelector = 'Not a department';
        $scope.courseSelector = 'Not a course';
        $scope.termSelector = 'Not a term';
        $scope.sectionSelector = 'Not a section';
        $scope.uniqueID = 'Not yet an id';
        $scope.professorSelected = 'Not a professor';
        $scope.addCourse = function () {
            courseCart.setCoursesData(this.schoolSelector, this.termSelector, this.deptSelector, this.courseSelector, this.sectionSelector, this.uniqueID);
        };
        $scope.selectSection = function (professor, unique_id, section_code){
            $scope.uniqueID = unique_id;
            $scope.professorSelected = professor;
            $scope.sectionSelector = section_code;
        };
        $scope.coursesAdded = courseCart.getCoursesData();
    })
    .controller('CourseCardLookupCtrl', function ($scope, $http, courseCart) {
        $http.get('data/course-card-ui.json').success(function(data) {
            $scope.courses = data;
        });
        $scope.radioModel = 'Rent';
        $scope.buyCollapse = true;
        $scope.rentCollapse = false;
        $scope.radioModel2 = 'None';

        $scope.products =[];
        $scope.addProducts = function(){
            $scope.products.push({isbn:$scope.isbn, option: $scope.option})
        };
        $scope.coursesDisplay = courseCart.getCoursesData();
        $scope.filterBy = [];
        $scope.coursesDisplay.forEach(function (courseDisplay) {
            $scope.filterBy.push(courseDisplay.unique_id);
        });
        $scope.filteredCourses = function() {
            return $scope.courses.filter(function (course)
            {
                return $scope.filterBy.indexOf(course.unique_id) !== -1;
            });
        };
    })
    .controller('MerchandiseCardCtrl', function ($scope, $http) {
        $http.get('data/merchandise.json').success(function(data) {
            $scope.merchandise = data;
        });
        $scope.option1Value = '';
        $scope.option2Value = '';
        $scope.option3Value = '';
        $scope.searchObj = [];
        $scope.searchObj.option1_value = $scope.option1Value;
        $scope.searchObj.option2_value = $scope.option2Value;
        $scope.searchObj.option3_value = $scope.option3Value;
        $scope.filteredValue = '';
        $scope.varPicture = '';
        $scope.addToCart = function(m){
            alert(m.title +" item added to cart");
        }
    })
    .controller('CourseLookupMultiDropdownCtrl', function($scope, $http, courseCart){
        $http.get('data/multi-dropdown/schools.json').success(function(data) {
            $scope.schools = data;
        });
        $http.get('data/multi-dropdown/terms.json').success(function(data) {
            $scope.terms = data;
        });
        $http.get('data/multi-dropdown/departments.json').success(function(data) {
            $scope.departments = data;
        });
        $http.get('data/multi-dropdown/courses.json').success(function(data) {
            $scope.courses = data;
        });
        $http.get('data/multi-dropdown/sections.json').success(function(data) {
            $scope.sections = data;
        });
        $scope.coursesAdded = [];
        $scope.schoolSelector = 'Not a school';
        $scope.deptSelector = 'Not a department';
        $scope.courseSelector = 'Not a course';
        $scope.termSelector = 'Not a term';
        $scope.sectionSelector = 'Not a section';
        $scope.uniqueID = 'Not yet an id';
        $scope.professorSelected = 'Not a professor';
        $scope.addCourse = function () {
            courseCart.setCoursesData(this.schoolSelector, this.termSelector, this.deptSelector, this.courseSelector, this.sectionSelector, this.uniqueID);
        };
        $scope.selectSection = function (professor, unique_id, section_code){
            $scope.uniqueID = unique_id;
            $scope.professorSelected = professor;
            $scope.sectionSelector = section_code;
        };
        $scope.coursesAdded = courseCart.getCoursesData();
        $scope.numRepeat = 4;
        $scope.getTimes = function (n){
            return new Array(n);
        };
        $scope.myOtherNumber = 10;
        $scope.getNumber = function(num) {
            return new Array(num);
        }
    });