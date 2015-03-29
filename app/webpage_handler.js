if(document.getElementById("trustwareButton")){
	console.log("Trustware Detected!")

	document.getElementById("trustwareButton").addEventListener("click", function(){
	    var msg = {"token": document.getElementById('trustwareToken').value,
	               "url": document.getElementById('trustwareUrl').value}

	    chrome.extension.sendRequest({method: "sendmsg", data:msg});
	});
}


