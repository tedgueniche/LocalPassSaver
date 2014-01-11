<?php
/*
 * Password Manager 
 * by Ted Gueniche (ted.gueniche@gmail.com)
 * Push and get encrypted password
 * All passwords are encrypted client-side
 * and the encryption key never leave the client
 * 
 * Server side dependencies: none
 * 
 * I am not responsible for any loss of information, 
 * missuse of the software or any other
 * ridiculous claim. 
 *
*/

//Should be set to OFF
error_reporting(E_ALL);
ini_set('display_errors', 1);

$path = ".data";

if(!isset($_POST['a']))
	fail("missing args");
	
$action = $_POST['a'];

$allowedAction = array("01", "02");
if(in_array($action, $allowedAction) == false)
	fail("unknown");

switch($action) {

	//Get the file
	case("01"):
		$data = file_get_contents($path);
		echo $data;
		break;
		
	//Push the file
	case("02"):
		if(!isset($_POST['d']))
			fail("missing args");
			
		file_put_contents($path, $_POST['d']);
		break;
		
	default:
		echo "wtf";
}
	
function fail($msg) {
	echo '<h1>fail</h1>'. $msg;
	exit(0);
}

	
	

?>