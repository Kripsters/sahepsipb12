<?php

header("Access-Control-Allow-Origin: *");
include "Rectangle.php";
include "Circle.php";

$rect1 = new Rectangle("red", 12, 12);
$circle1 = new Circle("blue", 24);
$data = [[$rect1, $rect1->calculateArea()],[$circle1, $circle1->calculateArea()]];
echo json_encode($data);



//$data = ["Rect1" => [$rect1, $rect1Area]];


//"message" => "Hi from backend"