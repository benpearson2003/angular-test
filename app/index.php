<!doctype html>
<html lang="en" ng-app="myApp">
<head>
    <meta charset="utf-8">
    <title>Textbook Display & Lookup</title>
    <link rel="stylesheet" href="css/app.css"/>
    <link rel="stylesheet" href="css/bootstrap.css"/>
</head>
<body class="container">
<?php require $_SERVER['DOCUMENT_ROOT'] . 'makeJSON.php'; ?>
<ul class="menu row">
    <li class="col-md-2"><a href="#/view1">view1</a></li>
    <li class="col-md-2"><a href="#/view2">view2</a></li>
    <li class="col-md-2"><a href="#/book">book</a></li>
    <li class="col-md-2"><a href="#/booksfile">book from file</a></li>
    <li class="col-md-2"><a href="#/course">Course</a></li>
    <li class="col-md-2"><a href="#/course2">Course2</a></li>
    <li class="col-md-2"><a href="#/coursemulti">Course-Multi-Select</a></li>
    <li class="col-md-2"><a href="#/bookcard">Book Card UI</a></li>
    <li class="col-md-2"><a href="#/coursecard">Course Card UI</a></li>
    <li class="col-md-2"><a href="#/courselookup">Course Lookup</a></li>
    <li class="col-md-2"><a href="#/courselookup2">Course Lookup 2</a></li>
    <li class="col-md-2"><a href="#/coursecardlookup">Course Card Lookup</a></li>
    <li class="col-md-2"><a href="#/merchandisecard">Merchandise Card</a></li>
    <li class="col-md-2"><a href="#/courselookupmultidropdown">Course Lookup Multi Dropdown</a></li>
</ul>

<div ng-view></div>


<!-- <div>Angular seed app: v<span app-version></span></div> -->


<script src="lib/angular/angular.js"></script>
<script src="lib/angular/angular-route.js"></script>
<script src="js/app.js"></script>
<script src="js/angular-masonry.js"></script>
<script src="js/services.js"></script>
<script src="js/controllers.js"></script>
<script src="js/filters.js"></script>
<script src="js/directives.js"></script>
<!-- <script src="js/jquery-2.1.0.min.js"></script>
<script src="js/bootstrap.min.js"></script> -->
<script src="js/ui-bootstrap-tpls-0.10.0.js"></script>
<script src="js/ui-utils.min.js"></script>

</body>
</html>
