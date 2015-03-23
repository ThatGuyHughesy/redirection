chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method == "getLocalStorage")
    sendResponse({
      data: localStorage['ngStorage-toggle']
    });
  else
    sendResponse({});
});