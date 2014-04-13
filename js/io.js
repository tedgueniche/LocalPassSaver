//Retrieve the data from the server
//as an encrypted blob
function get(id, callback) {

	var req = $.ajax({
		type:"POST",
		url: "bridge.php",
		data: {
			a: '01', //action
			i: id
		}
	}).done(function(data) {
		callback(data);
	}).fail(function(jqXHR, textStatus) {
		alert('fail: '+ textStatus);
	});
}

//Push an encrypted blob to the server
function push(id, dataCypher) {
	
	var req = $.ajax({
		type:"POST",
		url: "bridge.php",
		data: {
			a: '02', //action
			i: id,
			d: dataCypher //data
		}
	}).done(function(data) {
		//callback(data);
	}).fail(function(jqXHR, textStatus) {
		alert('fail: '+ textStatus);
	});
}


function update() {
	//updating to the server
	var key = getKey();
	var id = getId();
	var jsonData = getList();
	var dataCypher = encrypt(jsonData,key);
	push(id, dataCypher.toString());
	
	//Refresh the data from the server
	get(id, onDataReceived);
}