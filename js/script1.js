"use strict";


const button = document.getElementById('offer');
const banner = document.getElementById('banner-offer');
const body = document.getElementById('body-back');



button.addEventListener('click', function() {

    const styleDisplay = getComputedStyle(banner).display;

    if(styleDisplay === 'none') {
        body.style.filter = 'contrast(5%)';
        body.style.background = 'black';
        banner.style.display = 'block';
    } else {
        body.style.filter = 'contrast(100%)';
        body.style.background = '';
        banner.style.display = 'none';
    }
});

const cancel = document.getElementById('cancel-offer');

cancel.addEventListener('click', function() {

    body.style.filter = 'contrast(100%)';
    body.style.background = '';
    banner.style.display = 'none';
});