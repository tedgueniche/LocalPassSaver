
//AES config
var AEScfg = {};


//Decrypt the given data and output it to the HTML list
function decrypt(dataCypher, key) {
	
	//decrypt the data into a list of pairs
	var dataObject = CryptoJS.AES.decrypt(dataCypher, key, AEScfg);
	var dataUtf8 = dataObject.toString(CryptoJS.enc.Utf8);
	var dataJson = JSON.parse(dataUtf8);
	
	return dataJson;
}

//Encrypt the given data with the given key
function encrypt(dataJson,key) {
	
	//encrypt
	var dataUtf8 = JSON.stringify(dataJson);
	var dataCypher = CryptoJS.AES.encrypt(dataUtf8, key, AEScfg);
	
	return dataCypher;
}