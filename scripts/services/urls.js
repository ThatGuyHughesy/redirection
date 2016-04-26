chrome.runtime.onInstalled.addListener(function(details) {
    localStorage.setItem('ngStorage-power', true);
    localStorage.setItem('ngStorage-count', 0);
    getUrls();
});

chrome.windows.onCreated.addListener(function() {
    getUrls();
});

function getUrls() {
    $.getJSON('https://redirection.conorhughes.me/websites.json', function(data) {
        chrome.storage.local.set({ 'websites': JSON.stringify(data) }, function() {});
    }).fail(function(err) {
        console.error('Error retrieving websites!')
    });
}
