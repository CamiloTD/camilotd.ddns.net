const main = require('./index.html');
const $ = require('jquery/dist/jquery.min.js');
require('./index.css');

document.body.append(main);

function barLeft () {
    console.log("Left!!!")
    
    $('.activity-item').animate({
        marginLeft: "-100vw" 
    }, 10000, barRight);
}

function barRight () {
    console.log("Right!!!")

    $('.activity-item').css({
        marginLeft: "0px" 
    });

    barLeft();
}

barLeft();