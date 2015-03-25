var watchseries_base_url = "http://watchseries.ag/open/cale/";
var projectfreetv_base_url = "http://www.free-tv-video-online.info/interstitial2.html?lnk";
var url = window.document.URL;

chrome.runtime.sendMessage({
  method: "getPower",
  key: "status"
}, function(response) {
  if (response.data == 'true') {
    if (url.indexOf(projectfreetv_base_url) > -1) {
      chrome.extension.sendRequest({
        redirect: getProjectFreeTVVideoURL(url)
      });
    } else if (url.indexOf(watchseries_base_url) > -1) {
      chrome.extension.sendRequest({
        redirect: $('.myButton').attr("href")
      });
    }
  }
})

function getProjectFreeTVVideoURL(url) {
  var name = "lnk";
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(url);
  return "http://www.free-tv-video-online.info" + decodeURIComponent(results[1].replace(/\+/g, " "));
};