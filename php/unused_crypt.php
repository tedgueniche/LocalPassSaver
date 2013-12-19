<?php


function encrypt($data, $key_ascii) {
	$key_1 = hash('sha256',$key_ascii,TRUE);
	$size = mcrypt_get_iv_size(MCRYPT_CAST_256, MCRYPT_MODE_CFB);
	$iv = mcrypt_create_iv($size, MCRYPT_DEV_URANDOM);
	$encrypted = base64_encode(mcrypt_encrypt(MCRYPT_RIJNDAEL_256, $key_1, $data, MCRYPT_MODE_ECB, $iv));
	return $encrypted;
}

function decrypt($data, $key_ascii) {
	$key_1 = hash('sha256',$key_ascii,TRUE);
	$size = mcrypt_get_iv_size(MCRYPT_CAST_256, MCRYPT_MODE_CFB);
	$iv = mcrypt_create_iv($size, MCRYPT_DEV_URANDOM);
	$decrypted = trim(mcrypt_decrypt(MCRYPT_RIJNDAEL_256, $key_1, base64_decode($data), MCRYPT_MODE_ECB, $iv));
	return $decrypted;
}

?>