<?php
require_once( 'conn.php' );
$sql = "INSERT INTO `inscription`
        (id, user, pwd, email, email_confirm, jour, mois, annee )
        VALUES
        ( null, :user, :pwd, :email, :email_confirm, :jour, :mois, :annee )
        ";
$stmt = $conn->prepare( $sql );
$stmt->bindValue( ':user' , $_POST['user'] );
$stmt->bindValue( ':pwd' , $_POST['pwd'] );
$stmt->bindValue( ':email' , $_POST['email'] );
$stmt->bindValue( ':email_confirm' , $_POST['email_confirm'] );
$stmt->bindValue( ':jour' , $_POST['jour'] );
$stmt->bindValue( ':mois' , $_POST['mois'] );
$stmt->bindValue( ':annee' , $_POST['annee'] );


$stmt->execute();
header( 'Location: index.php' );