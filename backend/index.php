<?php
header("Access-Control-Allow-Origin: *");
$data = ["message" => "Hi from backend"];
echo json_encode($data);