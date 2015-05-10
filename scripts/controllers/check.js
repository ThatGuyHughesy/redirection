// Tab URL
var url = window.document.URL;

// TV show sites URLs
var watchseries_base_url = "http://watchseries.ag/open/cale/";
var watchtvseries_se_base_url = "http://watchtvseries.se/open/cale/";
var watchtvseries_vc_base_url = "http://watchtvseries.vc/open/cale/";
var watchseriestv_base_url = "http://watchseriestv.to/open/cale/";
var freetv_base_url = "http://www.free-tv-video-online.info/interstitial2.html?lnk";
var projectfreetv_base_url = "http://projectfreetv.ch/watch/";
var primewire_base_url = "http://www.primewire.ag/external.php?";

// Video hosting sites URLS
var gorillavid_base_url = "http://gorillavid.in/";
var daclips_base_url = "http://daclips.in/";
var movpod_base_url = "http://movpod.in/";
var sockshare_base_url = "http://sockshare.com/";
var firedrive_base_url = "http://firedrive.com/";
var vodlocker_base_url = "http://vodlocker.com/";
var vidxden_base_url = "http://vidxden.com/";
var vidbux_base_url = "http://vidbux.com/";
var vidbull_base_url = "http://vidbull.com/";
var movshare_base_url = "http://movshare.net/";
var played_base_url = "http://played.to/";
var bestreams_base_url = "http://bestreams.net/";
var filehoot_base_url = "http://filehoot.com/";
var thevideo_base_url = "http://www.thevideo.me/";

// If extension is turned on
chrome.runtime.sendMessage({
  method: "getPower",
  key: "status"
}, function(response) {
  if ( response.data == 'true' ) {
    if ( url.indexOf(freetv_base_url) > -1 ) {
      redirect(getFreeTVVideoURL(url));
    } else if ( url.indexOf(projectfreetv_base_url) > -1 ) {
      redirect($('a[rel=\'nofollow\']').attr('href'));
    } else if ( url.indexOf(watchseries_base_url) > -1 ||
                url.indexOf(watchtvseries_se_base_url) > -1 ||
                url.indexOf(watchtvseries_vc_base_url) > -1  ) {
      redirect($('.myButton').attr("href"));
    } else if ( url.indexOf(watchseriestv_base_url) > -1 ) {
      redirect($('.push_button').attr("href"));
    } else if ( url.indexOf(primewire_base_url) > -1 ) {
      redirect($('noframes').html());
    } else if ( url.indexOf(gorillavid_base_url) > -1 ||
                url.indexOf(daclips_base_url) > -1 ||
                url.indexOf(movpod_base_url) > -1 ||
                url.indexOf(vodlocker_base_url) > -1 ||
                url.indexOf(vidbull_base_url) > -1 ||
                url.indexOf(played_base_url) > -1 ||
                url.indexOf(bestreams_base_url) > -1 ||
                url.indexOf(thevideo_base_url) > -1 ) {
      clickButtonById('btn_download');
    } else if ( url.indexOf(sockshare_base_url) > -1 ||
                url.indexOf(firedrive_base_url) > -1 ) {
      clickButtonById('submitButton');
    } else if ( url.indexOf(vidxden_base_url) > -1 ||
                url.indexOf(vidbux_base_url) > -1 ||
                url.indexOf(filehoot_base_url) > -1 ) {
      clickButtonByName('method_free');
    } else if ( url.indexOf(movshare_base_url) > -1 ) {
      clickButtonByName('submit');
    }
  }
})

function getFreeTVVideoURL(url) {
  var name = "lnk";
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(url);
  if(checkIfExternalRedirect(results[1])){
    return decodeURIComponent(results[1].replace(/\+/g, " "));
  } else {
    return "http://www.free-tv-video-online.info" + decodeURIComponent(results[1].replace(/\+/g, " "));
  }
};
function checkIfExternalRedirect(url) {
  return url.indexOf("video.tt") > -1;
};

function redirect(url) {
  chrome.extension.sendRequest({
    redirect: url
  });
}

function clickButton(button) {
  button.disabled = false;
  button.click();
}

function clickButtonById(buttonId) {
  try {
    if (document.getElementById("pre-download-block")) {
      document.forms[1].submit();
    } else if (document.getElementById("submitButton")) {
      document.getElementById("submitButton").disabled = false;
      document.getElementById("submitButton").click();
    } else {
      var button = document.getElementById(buttonId);
      clickButton(button);
    }
  } catch (err) {
    'Error redirecting!'
  }
}

function clickButtonByName(buttonName) {
  try {
    var button = document.getElementsByName(buttonName)[0];
    clickButton(button);
  } catch (err) {
    'Error redirecting!'
  }
}