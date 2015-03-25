chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method == "getPower")
    sendResponse({
      data: localStorage['ngStorage-powerOn']
    });
  else
    sendResponse({});
});