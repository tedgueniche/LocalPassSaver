
//UI Globals
var listHtml = $('#list > ul#pass');
var loginBtn = $('#ikGo');
var addBtn = $('#lpGo');


//Initialize the UI
function initUI() {

	$('input').click(function() {
		var defaultValue = $(this).attr('default');
		if($(this).val() == defaultValue) {
			$(this).val("");
		}
	});
	
	$('input').blur(function() {
		var defaultValue = $(this).attr('default');
		if($(this).val().length == 0) {
			$(this).val(defaultValue);
		}
	});

	loginBtn.click(function() {
		
		$('#loginForm.page').hide();
		$('#list.page').show();
		
		//getting the key
		var key = getKey();
		var id = getId();
	
		//Get the data remotely
		get(id, onDataReceived);
		
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
	
	addBtn.click(function() {
		var label = $('#labelField').val();
		var password = $('#passField').val();
		
		//Client-side Validation
		if(label.length == 0 || password.length == 0)
			return;
		if(label == $('#labelField').attr('default') || password == $('#passField').attr('default'))
			return;
		
		//Adding the new entry to the list
		addToList(label, password, 'class="hidden"');
		
		$('#labelField').val($('#labelField').attr('default'));
		$('#passField').val($('#passField').attr('default'));
		
		update();
	});
	
	listHtml.on("click", ".rm", function() {
		$(this).parent().remove();
		update();
	});
	
	$('#list.page').hide();
	
	//Live event to toggle the password on demand
	listHtml.on("click", "li", function() {
		
		var pass = $(this).children('.pass');
		var rm = $(this).children('.rm');
		if(pass.css('display') == 'none') {
			$('.pass').hide();
			$('.rm').hide();
			pass.show();
			rm.show();
		}
		else {
			$('.pass').hide();
			pass.hide();
			rm.hide();
		}
	});
	
}

//Clear the list
function clearList() {
	listHtml.html(""); //clearing the list
}

//Adds one label/pass to the list
function addToList(label,value, attr) {
	attr = (typeof(attr)==='undefined') ? '' : attr;
	var html = '<li '+ attr +'>';
		html += '<div class="rm">X</div>';
		html += '<span class="label">'+ label +'</span>';
		html += '<div class="pass">'+ value +'</div>';
	html += '</li>';
	listHtml.append(html);
}

function getList() {
	var jsonArray = new Array();
	var entries = listHtml.children('li');
	entries.each(function(id, li) {
		var entry = {};
		entry['label'] = $(li).children('.label').html();
		entry['value'] = $(li).children('.pass').html();
		jsonArray.push(entry);
	});
	
	return jsonArray;
}

//returns the entered password
function getKey() {
	return $('#kField').val();
}

function getId() {
	return $('#iField').val();
}
