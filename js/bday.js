"use strict";

function konamiCodeOn(callBack) {
    var input = '';
    var key = '38384040373937396665';
    document.addEventListener('keydown', function (e) {
        input += ("" + e.keyCode);
        if (input === key) {
            return callBack();
        }
        if (!key.indexOf(input)) return;
        input = ("" + e.keyCode);
    });
}

konamiCodeOn(function () {
    alert('You have performed your battle style. Welcome fellow demon slayer.')

    document.body.style.backgroundImage = "url('img/firebreath.gif')";

});

//thinking of ideas for web page
//theme: anime (things to keep in mind: gifts)
//gifts I have gotten already: kingdom heart rings, one piece lego ship, rengoku figurine