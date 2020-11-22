<?php include '../conexion/conexion.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Ecommerce</title>
	<link rel="stylesheet" href="../css/bootstrap.min.css">
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
      <style>
      	body{
      		padding-bottom: 10px;
      	}
      </style>
</head>
<body class="bg-light">

	<nav class="navbar navbar-expand-lg navbar-light bg-info">
		<a href="../admin/index.php" class="navbar-brand">Ecommerce</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
			<span class="navbar-toggler-icon" ></span>
		</button>

		<div class="collapse navbar-collapse" id="menu">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item mr-auto">
					<a href="../admin/inventario.php" class="nav-link">Inventario</a>
				</li>
				<li class="nav-item dropdown" >
					<a href="#" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categorias</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
						<a href="../admin/categorias.php?opc=GENERAL" class="dropdown-item">GENERAL</a>
						<a href="../admin/categorias.php?opc=MODA" class="dropdown-item">MODA</a>
						<a href="../admin/categorias.php?opc=ELECTRONICA" class="dropdown-item">ELECTRONICA</a>
						<a href="../admin/categorias.php?opc=JOYERIA" class="dropdown-item">JOYERIA</a>
						<a href="../admin/categorias.php?opc=RELOJES" class="dropdown-item">RELOJES</a>
						<a href="../admin/categorias.php?opc=HOGAR" class="dropdown-item">HOGAR</a>
						<a href="../admin/categorias.php?opc=ZAPATOS" class="dropdown-item">ZAPATOS</a>
					</div>
				</li>
				<li class="nav-item mr-auto">
					<a href="javascript:history.back()" class="nav-link"> Volver Atrás</a>
				</li>
			</ul>
			<button class="btn btn-dark" id="logout" >Salir</button>
		</div>
	</nav>
	
