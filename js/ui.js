
//UI Globals
var listHtml = $('#list > ul');
var goBtn = $('#ikGo');


//Initialize the UI
function initUI() {

	goBtn.click(function() {
		
		$('#loginForm.page').hide();
		$('#list.page').show();
		
		//getting the key
		var key = getKey();
	
		//Get the data remotely
		get(onDataReceived);
		
		/*
		//TESTING ONLY
			var test = [
				{"label": "Gmail","value": "myC00lGm41lPa55word!"},
				{"label": "Gmail nGauge","value": "myC00lGm41lPa55word!"},
				{"label": "Dropbox","value": "DropBox__**_WootW00T"},
				{"label": "PinkPoney","value": "Suck____ITMi___cro__so_ft!"},
				{"label": "Home Sunshine Ubuntu","value": "Suck____ITMi___cro__so_ft!"},
				{"label": "Home Pi Miner","value": "Suck____ITMi___cro__so_ft!"},
				{"label": "UDEM Aquadie","value": "Suck____ITMi___cro__so_ft!"},
				{"label": "AWS Pineapple","value": "Suck____ITMi___cro__so_ft!"},
			];
			
			var dataCypher = encrypt(test,key);
			//alert(decrypt(dataCypher, key)[0].label);
			//onDataReceived(dataCypher);
			push(dataCypher.toString());
		//END OF TESTING
		*/
		
	});
	
	$('#list.page').hide();

	//Live event to toggle the password on demand
	listHtml.on("click", "li", function() {
		
		var item = $(this).children('.pass');
		if(item.css('display') == 'none') {
			$('.pass').hide();
			item.show();
		}
		else {
			$('.pass').hide();
			item.hide();
		}
	});
	
}

//Clear the list
function clearList() {
	listHtml.html(""); //clearing the list
}

//Adds one label/pass to the list
function addToList(label,value) {
	var html = '<li>';
		html += '<span class="label">'+ label +'</span>';
		html += '<div class="pass">'+ value +'</div>';
	html += '</li>';
	listHtml.append(html);
}

//returns the entered password
function getKey() {
	return $('#kField').val();
}
