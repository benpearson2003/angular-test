<?php
$query = "SELECT school_name, term_name, department_name, department_code, course_code, course_name, section_code, magento_course_id
            FROM schools INNER JOIN term_names ON schools.id=term_names.school_id INNER JOIN departments ON schools.id=departments.school_id INNER JOIN
            adoptions ON departments.id=adoptions.department_id";
$con=mysqli_connect("127.0.0.1","root","","magento_community");
$fetch = mysqli_query($con, $query) or die(mysqli_error($con));

$row_array = array();
while ($row = mysqli_fetch_assoc($fetch)) {
    $row_array[$row['school_name']]['school_name'] = $row['school_name'];
    $temp = array('course_name' => $row['course_name'], 'course_code' => $row['course_code']);
    $row_array[$row['school_name']]['terms'][$row['term_name']]
                    ['departments'][$row['department_name']]
                    ['courses'][] = [];
}

$return_arr = array();
foreach ($row_array as $key => $record) {
    $return_arr[] = $record;
}

file_put_contents("data/iMadeJSON.json" , json_encode($return_arr, JSON_PRETTY_PRINT));
mysqli_close($con);