const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const color3 = document.querySelector('.color3');
const color4 = document.querySelector('.color4');
const color5 = document.querySelector('.color5');

const value1 = document.querySelector('.value1');
const value2 = document.querySelector('.value2');
const value3 = document.querySelector('.value3');
const value4 = document.querySelector('.value4');
const value5 = document.querySelector('.value5');

const btn = document.querySelector('button');

function randomH() {
    return Math.floor(Math.random() * 360);
}
function randomS() {
    return Math.floor((Math.random() * 81) + 10);
}
function randomL() {
    return Math.floor( (Math.random() * 81) + 10 );
}

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function generateShades() {
    let randomHue = randomH();
    let randomSat = randomS();
    let randomLight = randomL();

    function correctiveHue(x) {
        if ((randomHue + x) > 360) {
            return (randomHue + x) - 360;
        } else {
            return (randomHue + x);
        }
    }

    function correctiveSat(x) {
        if ((randomSat + x) > 100) {
            return (randomSat - x);
        } else {
            return (randomSat + x);
        }
    }

    function correctiveLight(x) {
        if ((randomLight + x) > 100) {
            return (randomLight - x);
        } else {
            return (randomLight + x);
        }
    }

    color1.style.backgroundColor = "hsl(" + randomHue + ", " + randomSat + "%, " + randomLight + "%)";
    color2.style.backgroundColor = "hsl(" + correctiveHue(90) + ", " + randomSat + "%, " + randomLight + "%)";
    color3.style.backgroundColor = "hsl(" + correctiveHue(180) + ", " + randomSat + "%, " + randomLight + "%)";
    color4.style.backgroundColor = "hsl(" + correctiveHue(270) + ", " + randomSat + "%, " + randomLight + "%)";
    color5.style.backgroundColor = "hsl(" + randomHue + ", " + correctiveSat(20) + "%, " + correctiveLight(10) + "%)";

    value1.innerHTML = rgb2hex(color1.style.backgroundColor);
    value2.innerHTML = rgb2hex(color2.style.backgroundColor);
    value3.innerHTML = rgb2hex(color3.style.backgroundColor);
    value4.innerHTML = rgb2hex(color4.style.backgroundColor);
    value5.innerHTML = rgb2hex(color5.style.backgroundColor);
}

generateShades();

btn.addEventListener("click", ()=>{
    generateShades();
});


// menu animation

const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('ul');


menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle('open');
    navMenu.classList.toggle('open');
});