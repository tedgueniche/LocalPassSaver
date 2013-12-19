
//Retrieve the data from the server
//as an encrypted blob
function get(callback) {

	var req = $.ajax({
		type:"POST",
		url: "bridge.php",
		data: {
			a: '01' //action
		}
	}).done(function(data) {
		callback(data);
	}).fail(function(jqXHR, textStatus) {
		alert('fail: '+ textStatus);
	});
}

//Push an encrypted blob to the server
function push(dataCypher) {
	
	var req = $.ajax({
		type:"POST",
		url: "bridge.php",
		data: {
			a: '02', //action
			d: dataCypher //data
		}
	}).done(function(data) {
		//callback(data);
	}).fail(function(jqXHR, textStatus) {
		alert('fail: '+ textStatus);
	});
}