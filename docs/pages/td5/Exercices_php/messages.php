<?php

echo "<a href='/messages.php?message=Bonjour'>afficher Bonjour</a> <br>";
echo "<a href='/messages.php?message=Salut'>afficher Salut</a> <br>";
echo "<a href='/messages.php?message=Aurevoir'>afficher Aurevoir</a> <br>";
echo "<a href='/messages.php'>afficher le message par défaut</a> <br>";

//if (!isset($_GET['message']) or $_GET['message'] == ""){
  //  echo "Message par défaut";
//}else{
  //  $message = $_GET['message'];
    //echo "$message";
//}

//on peut aussi utiliser cette methode 
$default = "message par defaut";
$message = $_GET['message']??$default;
echo "$message"
?>