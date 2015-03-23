chrome.runtime.sendMessage({
  method: "getLocalStorage",
  key: "status"
}, function(response) {
  var toggle = response.data;
  if (toggle == 'true') {
    var base_url = "http://www.free-tv-video-online.info/interstitial2.html?lnk";
    if (window.document.URL.indexOf(base_url) > -1) {
      var newurl = "http://www.free-tv-video-online.info" + getVideoURL();
      chrome.extension.sendRequest({
        redirect: newurl
      });
    }

    function getVideoURL() {
      var name = "lnk";
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
  }
});