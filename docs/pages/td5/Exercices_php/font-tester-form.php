<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form method='POST'>
    <label for='msg'>message :</label>
    <input type='text' name="message" placeholder="message" id='msg'>
    <br>
    <br>
    <label for="color">couleur :</label>
    <input type="text" name="couleur" id="color" placeholder="couleur">
    <br>
    <br>
    <label for="size">taille :</label>
    <input type="text" name="taille" id="size" placeholder="taille de la police">
    <input type="submit" value="Envoyer">
</form>
<?php
$message = $_POST['message']??"Erreur : aucun message";
$couleur = $_POST['couleur']??"black";
$taille = $_POST['taille']??"12";
echo "<p style='color:$couleur; font-size:{$taille}px'>$message</p>"
?>
</body>
</html>
