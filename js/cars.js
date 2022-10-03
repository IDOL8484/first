"use strict";

const garageButton = document.getElementById('nav-garage');
const listCar = document.getElementById('list-auto');


garageButton.addEventListener('click', function() {

    const listDisplay = getComputedStyle(listCar).display;

    if(listDisplay === 'none') {
        listCar.style.display = 'block';
    } else {
        listCar.style.display = 'none';
    }
})