<?php

    $date = $_GET['todayDate'];

    echo file_get_contents('https://moment.douban.com/api/stream/date/' . $date . '?alt=json&apikey=0bcf52…7047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6');

?>