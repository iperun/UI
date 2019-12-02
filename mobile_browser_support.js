// Get the modal
var modal = document.getElementById("myModal");

// Open the modal
open = function () {
    modal.style.display = "block";
}

function red() {
    $('div').css('background', '#F44336')
    $('.modal').text(
        'Please use a browser to view the content. Not supported on mobile devices.')
}

function white() {
    $('div').css('background', '#fff')
    $('.modal').text(
        ''
    )
}

function screen_resize() {
    var h = parseInt(window.innerHeight);
    var w = parseInt(window.innerWidth);

    if (w <= 1000) {
        //max-width 1000px
        red();
        open();
    } else {
        white();
    }

}
// if window resize call responsive function
$(window).resize(function (e) {
    screen_resize();
});
// call responsive function on default :)
$(document).ready(function (e) {
    screen_resize();
});

var $buoop = {
    required: {
        e: -4,
        f: -3,
        o: -3,
        s: -1,
        c: -3
    },
    insecure: true,
    style: "corner",
    api: 2019.12
};

function $buo_f() {
    var e = document.createElement("script");
    e.src = "//browser-update.org/update.min.js";
    document.body.appendChild(e);
};
try {
    document.addEventListener("DOMContentLoaded", $buo_f, false)
} catch (e) {
    window.attachEvent("onload", $buo_f)
}