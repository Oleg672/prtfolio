const images = document.querySelectorAll(".projects__item img");
let widthItem = document.querySelector(".projects__item").offsetWidth + 24;
const sliderLine = document.querySelector(".projects__list")
const sliderLine1 = document.querySelector(".testimonials__carousel-inner")
//wrapper__max-width
const sliderLine1Count=document.querySelectorAll(".testimonials__main").length
let count = 0;
let count1 = 0;
let width;
let width1= document.querySelector(".testimonials__main").offsetWidth;
let openFaqItem;
function rollslider1() {
    sliderLine1.style.transform = 'translate(-' + (count1 * width1) + 'px)';
}
document.querySelectorAll(".testimonials__button-right").forEach(box =>
    box.addEventListener("click", function () { 
        width1= document.querySelector(".testimonials__main").offsetWidth;
        if(count1<sliderLine1Count-1){
        count1++;
        rollslider1() }
    })
)
document.querySelectorAll(".testimonials__button-left").forEach(box =>
    box.addEventListener("click", function () { 
        width1= document.querySelector(".testimonials__main").offsetWidth;
        if(count1>0){
            count1--;
            rollslider1() 
        }
        
    })
)
function init() {
    widthImages = document.querySelectorAll(".projects__item img").offsetWidth;
    width = document.querySelector(".projects__carusel").offsetWidth;
    width1 = document.querySelector(".testimonials__main").offsetWidth;

    if (width <= 425) {
        sliderLine.style.width = width * images.length + 'px';
        images.forEach(item => {
            item.style.width = width + 'px';
            item.style.height = 'auto';
        });
        rollslider();
    }
    // if (width <= 1217) {
    //     sliderLine.style.width = width * images.length + 'px';
    //     images.forEach(item => {
    //         item.style.width = width + 'px';
    //         item.style.height = 'auto';
    //     });
    //     rollslider();
    // }

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
        let li = document.getElementsByClassName("projects__item");
        let xxx = li.length - 1;
        sliderLine.insertBefore(li[xxx], sliderLine.firstChild)
        sliderLine.insertBefore(li[0], sliderLine.lastchild)


        sliderLine.style.transform = 'translate(-' + (count * widthItem) + 'px)';
    } else {
        sliderLine.style.transform = 'translate(-' + (count * width) + 'px)';
    }
}
document.querySelectorAll('.faq__item').forEach(e =>
    e.addEventListener("click", function (e) { 
    if (e.target.className == "faq__item") {
        let children = e.target.lastElementChild;
        let visability = children.style.display;
        if (visability == "none" || visability == "") {
            try { openFaqItem.style.display = "none" } catch { }
            e.target.lastElementChild.style.display = "block";
            openFaqItem = e.target.lastElementChild;
        } else {
            e.target.lastElementChild.style.display = "none"
        }
    }
}));




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







