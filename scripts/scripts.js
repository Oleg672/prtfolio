const images = document.querySelectorAll(".projects__item img");
let widthItem = document.querySelector(".projects__item").offsetWidth + 24;
const sliderLine = document.querySelector(".projects__list")
let count = 0;
let count1 = 0;
let width;

let openFaqItem;

document.addEventListener('click', function (e) {


    console.log('evt', e);
    // let children=e.target.parentElement.parentElement.children[1];
    // if (e.target.className === "faq__item-text" ) {
    //     if (children.style.display === "none" || children.style.display == "") {
    //         children.style.display = "block";
    //     } else {
    //         children.style.display = "none";
    //     }

    // }

    if (e.target.className == "faq__item") {
        let children = e.target.lastElementChild;
        let visability = children.style.display;
        if (visability == "none" || visability == "") {
           try{openFaqItem.style.display = "none"} catch{}
            e.target.lastElementChild.style.display = "block";
            openFaqItem=e.target.lastElementChild;
        } else {
            e.target.lastElementChild.style.display = "none"
        }

    }

});



// let visability = document.querySelector(".faq__item-content").style.display;
// if(visability == "block"){document.querySelector(".faq__item-content").style.display = "none";}
// else{
// document.querySelector(".faq__item-content").style.display = "block";}



function init() {
    widthImages = document.querySelectorAll(".projects__item img").offsetWidth;
    width = document.querySelector(".projects__carusel").offsetWidth;

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
        let li = document.getElementsByClassName("projects__item");
        let xxx = li.length - 1;
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







