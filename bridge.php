<?php
/*
 * This bridge permits a user to download
 * or upload(write/overwrite) a file given
 * its id.
 *
 * There is no security in this bridge
 * but the obfuscation of the input parameter
 * and the lack of knowing which file exists
*/

//DEBUG only
//Should be set to OFF in production
error_reporting(E_ALL);
ini_set('display_errors', 1);


//Getting the action parameters
if(!isset($_POST['a']))
	fail("missing args"); 
$action = $_POST['a'];

//Getting the id parameters
if(!isset($_POST['i']))
	fail("missing args");
$id = $_POST['i'];

//Path to the data from the given id
$path = ".data_". $id;

/*
 * allowed actions:
 * 01 => read
 * 02 => write
 */
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
		
	default: //No need
}


//Fail (FTW)
function fail($msg) {
	echo '<h1>fail</h1>'. $msg;
	exit(0);
}


?>