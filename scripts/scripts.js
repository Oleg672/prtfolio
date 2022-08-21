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

