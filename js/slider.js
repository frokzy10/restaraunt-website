// slider////////////////////////////////////////////////////////////////////
let slide = document.querySelectorAll('.slide');
let current = 0;
let refreshInterval = setInterval(next, 4500);

function cls() {
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
    }
}

function next() {
    cls();
    if (current === slide.length - 1) current = -1;
    current++;

    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.4;

    let x = 0.4;
    let intX = setInterval(function () {
        x += 0.1;
        slide[current].style.opacity = x;
        if (x >= 1) {
            clearInterval(intX);
            x = 0.2;
        }
    }, 20);
}

function prev() {
    cls();
    if (current === 0) current = slide.length;
    current--;

    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.4;
    let x = 0.4;
    let intX = setInterval(function () {
        x += 0.1;
        slide[current].style.opacity = x;
        if (x >= 1) {
            clearInterval(intX);
            x = 0.4;
        }
    }, 20);
}

function start() {
    cls();
    slide[current].style.display = 'block';
}

function stopAutoPlay() {
    clearInterval(refreshInterval);
}

function resumeAutoPlay() {
    refreshInterval = setInterval(next, 4500);
}

start();
