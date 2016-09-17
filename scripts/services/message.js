chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "power") {
        sendResponse({
            data: localStorage['power']
        });
    } else if (request.method == "redirection") {
        localStorage.setItem('count', parseInt(localStorage['count']) + 1);
    } else {
        sendResponse({});
    }
});
