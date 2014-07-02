<?php
$con=mysqli_connect("127.0.0.1","root","","magento_community");
$query = "SELECT school_name, term_name, department_name, department_code, course_code, course_name, section_code, magento_course_id
            FROM schools INNER JOIN term_names ON schools.id=term_names.school_id INNER JOIN departments ON schools.id=departments.school_id INNER JOIN
            adoptions ON departments.id=adoptions.department_id";
$fetch = mysqli_query($con, $query) or die(mysqli_error($con));

$row_array = array();
while ($row = mysqli_fetch_assoc($fetch)) {
    $row_array[$row['school_name']]['school_name'] = $row['school_name'];
    $row_array[$row['school_name']]['terms']['term_name'] = $row['term_name'];
    $row_array[$row['school_name']]['terms']['departments'][] = array(
        'department_name' => $row['department_name'],
        'department_code' => $row['department_code'],
        'course_name' => $row['course_name'],
        'course_code' => $row['course_code'],
        'section_code' => $row['section_code'],
        'unique_id' => $row['magento_course_id']
    );
}

$return_arr = array();
foreach ($row_array as $key => $record) {
    $return_arr[] = $record;
}

file_put_contents("data/iMadeJSON.json" , json_encode($return_arr, JSON_PRETTY_PRINT));
mysqli_close($con);