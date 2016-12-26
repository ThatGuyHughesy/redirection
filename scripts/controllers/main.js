var count;
var power;
var version;

$(document).ready(function() {
    count = localStorage['count'];
    if (count == null) {
        count = 0;
        localStorage['count'] = count;
    }

    power = localStorage['power'];
    if (power == null) {
        alert('ehy')
        power = true;
        localStorage['power'] = power;
    }

    version = chrome.runtime.getManifest().version;

    setState();

    $('#toggle').click(function(event) {
        event.preventDefault();
        changeState();
    });

    function changeState() {
        var toggled = power = !power;
        Promise.resolve(toggled).then(function(result) {
            setState();
        });
    };

    function setState() {
        localStorage['power'] = power;
        if (power) {
            on();
        } else {
            off();
        }
        $('#count').html(count);
        $('#version').html(version);
    };

    function on() {
        $('#power').removeClass('off');
        $('#power').addClass('on');
    };

    function off() {
        $('#power').removeClass('on');
        $('#power').addClass('off');
    };
});
