'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
    value('version', '0.1')

    .service('courseCart', function () {
        var coursesData = [];

        return {
            getCoursesData: function () {
                return coursesData;
            },
            setCoursesData: function(schoolSelector, termSelector, deptSelector, courseSelector, sectionSelector, uniqueID) {
                coursesData.push({
                    school: schoolSelector,
                    term_name: termSelector,
                    department_code: deptSelector,
                    course_code: courseSelector,
                    section_code: sectionSelector,
                    unique_id: uniqueID
                });
            }
        };
    });