var port = null;

function sendNativeMessage(message) {
  try {
    port.postMessage(message);
    console.log("Sent message: " + JSON.stringify(message));
  }
  catch(err) {
    console.log("Failed to send message: " + err)
  }
}

function onNativeMessage(message) {
  console.log("Received message: " + JSON.stringify(message));
}

function onDisconnected() {
  console.log("Failed to connect: " + chrome.runtime.lastError.message);
  port = null;
}

function connect() {
  var hostName = "com.google.chrome.example.echo";
  console.log("Connecting to native messaging host " + hostName)
  port = chrome.runtime.connectNative(hostName);
  port.onMessage.addListener(onNativeMessage);
  port.onDisconnect.addListener(onDisconnected);
}

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request.method === "sendmsg") {
    console.log(request.data.token);
    console.log(request.data.url);

    if(!port){ connect(); }

    sendNativeMessage(request.data);
  }
});
