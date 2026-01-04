<?php
require 'db.php';

if ($_POST['password'] !== $_POST['confirm_password']) {
    die("Les mots de passe ne correspondent pas");
}

$password_hash = password_hash($_POST['password'], PASSWORD_DEFAULT);

$sql = "INSERT INTO utilisateurs 
(civilite, nom, prenom, email, mot_de_passe, pays_residence, nationalite, 
code_postal, ville, telephone, statut, newsletter)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $pdo->prepare($sql);
$stmt->execute([
    $_POST['civilite'],
    $_POST['nom'],
    $_POST['prenom'],
    $_POST['email'],
    $password_hash,
    $_POST['pays_residence'],
    $_POST['nationalite'],
    $_POST['code_postal'],
    $_POST['ville'],
    $_POST['telephone'],
    $_POST['statut'],
    isset($_POST['newsletter']) ? 1 : 0
]);

echo "Compte créé avec succès ✅";
?>