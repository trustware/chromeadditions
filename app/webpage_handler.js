if(document.getElementById("trustwareInfo")){
	console.log("Trustware Detected!")

	node = document.getElementById("trustwareInfo");
	while (node.nodeName != "FORM" && node.parentNode) {
    	node = node.parentNode;
	}

	node.addEventListener("submit", function(){
	    var msg = {"token": document.getElementById('trustwareInfo').value,
	               "url": document.getElementById('trustwareInfo').getAttribute('url')}
		console.log(msg);

	    chrome.extension.sendRequest({method: "sendmsg", data:msg});
	});
}


