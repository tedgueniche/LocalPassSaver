<?php

function loadPasswords($key) {
	global $delimiter, $path;

	$data_encrypted = file_get_contents($path);
	$data = decrypt($data_encrypted, $key);
	
	$dico = array();
	
	$lines = explode("\n", $data);
	foreach($lines as $line) {
		$fields = explode($delimiter, $line);
		if(sizeof($fields) != 2) {
			echo "ERROR";
			exit(0);
		}
		$label = $fields[0];
		$pass = $fields[1];
		
		$dico[$label] = $pass;
	}
	return $dico;
}

function savePasswords($dico, $key) { 
	global $delimiter, $path;
	
	$output = "";
	foreach($dico as $label => $password) {
		$output .= $label . $delimiter . $password ."\n";
	}
	$encrypted = encrypt($output, $key);

	file_put_contents($path, $encrypted);
	return $encrypted;
}


function getPassword($label) {

}


function getPasswordLabels() {

}


function addPassword($label, $password) {

}


function editPassword($label, $password) {

}

function removePassword($label) {

}



?>