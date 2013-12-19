
//Start
initUI();


//Event on data received from the server
function onDataReceived(dataCypher) {

	//Decrypt the data
	var key = getKey();
	var data = decrypt(dataCypher, key);
	
	//Add each entry to the list
	clearList();
	for(id in data) {
		addToList(data[id].label, data[id].value);
	}	
}