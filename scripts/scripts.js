const images = document.querySelectorAll(".projects__item img");
let widthItem = document.querySelector(".projects__item").offsetWidth + 24;
const sliderLine = document.querySelector(".projects__list")
let count = 0;
let count1 = 0;
let width;

let trustedCcarousel = document.getElementsByClassName("trusted-by__list");
function Carousel() {
   // trustedCcarousel[0].style.left = count1 + "px";
    count1--;
};

let timerId = setInterval(() => Carousel(), 40);




function init() {
    widthImages = document.querySelectorAll(".projects__item img").offsetWidth;
    width = document.querySelector(".projects__carusel").offsetWidth;
    //images = document.querySelectorAll(".projects__item img");
    
    if (width <= 425) {
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

        //  var li0 = document.createElement("li");
        //  var children = sliderLine.children.length + 1
        //  li0.setAttribute("class", "projects__item")
        //  li0.appendChild(document.createTextNode("Element "+children));
        //  sliderLine.appendChild(li0);

        let li = document.getElementsByClassName("projects__item");
        let xxx=li.length-1;
        sliderLine.insertBefore(li[xxx], sliderLine.firstChild)
        sliderLine.insertBefore(li[0], sliderLine.lastchild)
       

        sliderLine.style.transform = 'translate(-' + (count * widthItem) + 'px)';
    } else {
        sliderLine.style.transform = 'translate(-' + (count * width) + 'px)';
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
    e[0].id = 'nav-full-screen';


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
    e[0].id = '';
}







