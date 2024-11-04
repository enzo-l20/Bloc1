<?php
//echo "<p style='color: red; font-size: 30'>test</p>" modifier la couleur et la taille 

echo "<a href='?message=bonjour&couleur=red&taille=15'>Bonjour couleur rouge taille 15</a> <br>";
echo "<a href='?message=bonjour&couleur=green&taille=30'>Bonjour couleur vert taille 30</a> <br>";
echo "<a href='?message=bonjour&couleur=blue&taille=50'>Bonjour couleur bleu taille 50</a>";
$defaultcolor = "black";
$defaultsize = "12";
$message = $_GET['message'];
$couleur = $_GET['couleur']??$defaultcolor;
$taille = $_GET['taille']??$defaultsize;

echo "<p style='color:$couleur; font-size:$taille'px' '>$message</p>"

?>

