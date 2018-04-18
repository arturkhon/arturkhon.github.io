/*eslint-env browser*/
/*global prompt*/

var myImage = document.querySelector('img');

myImage.onclick = function () {
    'use strict';
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/google-icon.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
};

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    'use strict';
    var myName = prompt('Plese enter your name');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
    'use strict';
    setUserName();
};