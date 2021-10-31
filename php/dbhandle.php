<?php

require( "dbdata.php" );

$db = new PDO( $dsn, $username, $password );
$count = $db -> exec( "set names utf-8" );

// echo $_GET[ 'fridgeName' ];


// insertNewFridge( $db );
// selectAll($db);
// getFridgeOfName( $db );

if( !isset( $_POST['data'] ) )
{
    echo "no data";
    die();
}

$data = json_decode( $_POST[ 'data' ], true );

switch( $data[ 'mode' ] )
{
    // case "queryName":
    //     echo json_encode( getQueryFridge() );
    case "getFridge";
        echo json_encode( getFridgeOfName( $db, $data[ 'name' ] ) );
}

// echo json_encode( getFridgeOfName( $db, "text1" ) );


function insertNewFridge( $db )
{
    $name = $_GET[ "fridgeName" ];
    $text = "This is dummy text yeah i dont care anymore plz kill me";
    $arr = array( 0 => 'a', 1 => 'b', 2 => 'c' );
    $arr = json_encode( $arr );

    $sql = "INSERT INTO `lodowki` VALUES( NULL, :name, :text, :arr )";
    $sth = $db -> prepare( $sql );
    $sth -> bindValue( ":name", $name, PDO::PARAM_STR );
    $sth -> bindValue( ":text", $text, PDO::PARAM_STR );
    $sth -> bindValue( ":arr", $arr, PDO::PARAM_STR );
    $r = $sth -> execute();
    var_dump($r);
}


function selectAll( $db )
{
    $sth = $db -> prepare( "SELECT * FROM `lodowki`" );
    $sth -> execute();
    $result = $sth -> fetchAll( PDO::FETCH_ASSOC );
    return $result;
}

function getFridgeOfName( $db, $name )
{
    $sql = "SELECT * FROM `lodowki` WHERE `Nazwa` = :name";
    $sth = $db -> prepare( $sql );
    $sth -> bindValue( ":name", $name, PDO::PARAM_STR );
    $sth -> execute();
    $result = $sth -> fetchAll( PDO::FETCH_ASSOC );
    // echo "<br/>";
    // print_r( $result );
    return $result;
}

// function getQueryFridge()
// {
//     if( isset( $_GET[ 'fridgeName' ] ) )
//     {
//         return $_GET[ 'fridgeName' ];
//     }
// }

?>