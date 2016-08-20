var count;
var power;

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
