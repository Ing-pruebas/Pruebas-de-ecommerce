<?php @session_start();
$con = new PDO('mysql:host=localhost;dbname=ecommerce', 'root', '');

//$con = new PDO('mysql:host=localhost;dbname=id15363976_pruebas_ecommerce', 'id15363976_pruebas_ecommerce', 'e-7=BjEGi1*KuM9N');

$con->exec('set names utf8');
 ?>