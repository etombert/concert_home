<?php
try{
    $conn = new PDO( 'mysql:host=db621375277.db.1and1.com;dbname=db621375277;charset=utf8' , 'dbo621375277' , 'concerthome2015' );
} catch( Exception $e ){
    die( $e->getMessage() );
}