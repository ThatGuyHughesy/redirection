chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "power") {
        sendResponse({
            data: localStorage['ngStorage-power']
        });
    } else if (request.method == "redirection") {
        localStorage.setItem('ngStorage-count', parseInt(localStorage['ngStorage-count']) + 1);
    } else {
        sendResponse({});
    }
});
