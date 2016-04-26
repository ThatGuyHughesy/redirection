var url = window.document.URL;

chrome.runtime.sendMessage({
    method: "power",
    key: "status"
}, function(response) {
    if (response.data == 'true') {
        chrome.storage.local.get('websites', function(obj) {
            if (!$.isEmptyObject(obj)) {
                var websites = JSON.parse(obj.websites);
                websites.forEach(checkUrl);
            }
        });
    }
});

function checkUrl(element, index, array) {
    if (url.indexOf(element.url) > -1) {
        switch (element.action) {
            case 1:
                redirect($('a[rel=\'nofollow\']').attr('href'));
                break;
            case 2:
                redirect($('.myButton:visible').attr("href"));
                break;
            case 3:
                redirect($('.push_button:visible').attr("href"));
                break;
            case 4:
                redirect($('noframes').html());
                break;
            case 5:
                clickButtonById('btn_download');
                break;
            case 6:
                clickButtonById('submitButton');
                break;
            case 7:
                clickButtonByName('method_free');
                break;
            case 8:
                clickButtonByName('submit');
                break;
            case 9:
                console.log($('.download-timer').html())
                redirect($('.download-timer center').attr("href"));
                break;
        }
    }
}

function incrementCount() {
    chrome.runtime.sendMessage({
        method: "redirection"
    });
}

function redirect(url) {
    chrome.extension.sendRequest({
        redirect: url
    });
    incrementCount();
}

function clickButton(button) {
    button.disabled = false;
    button.click();
}

function clickButtonById(buttonId) {
    try {
        if (document.getElementById("pre-download-block")) {
            document.forms[1].submit();
            incrementCount();
        } else if (document.getElementById("submitButton")) {
            document.getElementById("submitButton").disabled = false;
            document.getElementById("submitButton").click();
            incrementCount();
        } else {
            var button = document.getElementById(buttonId);
            clickButton(button);
            incrementCount();
        }
    } catch (err) {
        'Error redirecting!';
    }
}

function clickButtonByName(buttonName) {
    try {
        var button = document.getElementsByName(buttonName)[0];
        clickButton(button);
        incrementCount();
    } catch (err) {
        'Error redirecting!';
    }
}
