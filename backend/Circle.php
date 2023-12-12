<?php

include_once "Shape.php";

class Circle extends Shape {

    public $radius;

    public function __construct(   
        $color,
        $radius) {
            parent::__construct($color);
            $this->radius=$radius;
        }

    public function calculateArea() {
        $radiusSquared = $this->radius*$this->radius;
       return pi()*$radiusSquared;
   }
}