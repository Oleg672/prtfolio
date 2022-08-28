const images = document.querySelectorAll(".projects__item img");
let widthItem = document.querySelector(".projects__item").offsetWidth;
const sliderLine = document.querySelector(".projects__list");
let count = 0;
let width;
function init() {

    width = document.querySelector(".projects__carusel").offsetWidth;
    if (width <= 425) {
        console.log(width);
        sliderLine.style.width = width * images.length + 'px';
        images.forEach(item => {
            item.style.width = width + 'px';
            item.style.height = 'auto';
        });
        rollslider();
    }

}

window.addEventListener('resize', init)
init();


document.querySelector('.btn-right').addEventListener('click', function () {
    count++;
    if (count >= images.length) { count = 0 }
    console.log(width);
    rollslider();
})
document.querySelector('.btn-left').addEventListener('click', function () {
    count--;
    if (count < 0) { count = images.length - 1 }
    console.log(width);
    rollslider();
})
function rollslider() {
    if (width >= 425) {

        sliderLine.style.transform = 'translate(-' + count * widthItem + 'px)';
    } else {

        sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    }
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
    var e = document.getElementsByClassName("wrapper__max-width");
    e[0].id='nav-full-screen';
    

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
    var e = document.getElementsByClassName("wrapper__max-width");
    e[0].id='';
}







