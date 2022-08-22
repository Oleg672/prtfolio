const images = document.querySelectorAll(".projects__item img");
const sliderLine = document.querySelector(".projects__list");
let count = 0;
let width;
function init() {

    width = document.querySelector(".projects__carusel").offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollslider();
}

window.addEventListener('resize', init)
init();

document.querySelector('.btn-right').addEventListener('click', function () {
    count++;
    if (count >= images.length) { count = 0 }
    rollslider();
})
document.querySelector('.btn-left').addEventListener('click', function () {
    count--;
    if (count < 0) { count = images.length - 1 }
    rollslider();
})
function rollslider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    console.log(count);
}






function showNav() {

    var b = document.getElementsByClassName("header__nav");
    b[0].id = "show";
    var c = document.getElementsByClassName("header__nav-mini");
    c[0].id = ('');
    var a = document.getElementsByClassName("header__nav-close");
    a[0].id = "show";
    var d = document.getElementsByClassName("logo");
    d[0].id = ('');
}
function closeNav() {

    var b = document.getElementsByClassName("header__nav");
    b[0].id = "";
    var a = document.getElementsByClassName("header__nav-close");
    a[0].id = "";
    var c = document.getElementsByClassName("header__nav-mini");
    c[0].id = ('show');
    var d = document.getElementsByClassName("logo");
    d[0].id = ('show');
}







