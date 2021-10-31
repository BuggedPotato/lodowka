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
    case "getFridge";
        echo json_encode( getFridgeOfName( $db, $data[ 'name' ] ) );
        break;
    case "saveFridge":
        insertNewFridge( $db, $data );
}

// echo json_encode( getFridgeOfName( $db, "text1" ) );


function insertNewFridge( $db, $data )
{
    $f = json_decode( $data[ 'fridge' ] );
    // echo json_encode($f -> name);

    $name = $f -> name;
    $sql = "";

    // does the fridge already exit in the db
    if( !empty( getFridgeOfName( $db, $name ) ) )
    {
        $sql = "UPDATE `lodowki` SET `Data`=:text, `StickyNotesTab`=:arr WHERE `Nazwa`=:name";
    }
    else
    {
        $sql = "INSERT INTO `lodowki` VALUES( NULL, :name, :text, :arr )";
    }
    // echo json_encode( $sql );
    // die();
    $text = json_encode( $f );
    $arr = $f -> stickyNotes;
    $arr = json_encode( $arr );

    $tmp = array( $name, $text, $arr );
    // echo json_encode( $tmp );

    
    $sth = $db -> prepare( $sql );
    $sth -> bindValue( ":name", $name, PDO::PARAM_STR );
    $sth -> bindValue( ":text", $text, PDO::PARAM_STR );
    $sth -> bindValue( ":arr", $arr, PDO::PARAM_STR );
    $r = $sth -> execute();
    echo json_encode( $r );
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