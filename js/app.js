

/************************/
/*       INDEX          */
/*=======================
 *  01.  Loader         *
 *  02.  Menu           *
 *  03.  Scrollspy      *
 *  04.  Magnific Popup *
 *  05.  Owl Carousel   *
 *  06.  Back to top    *
 *  07.  Feather Icon   *
 =======================*/

// Preloader
window.onload = function loader() { 
    setTimeout(() => {
        document.getElementById('preloader').style.visibility = 'hidden';
        document.getElementById('preloader').style.opacity = '0';
    }, 350);
} 


// Menu sticky
function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
    ) {
        navbar.classList.add("nav-sticky");
    } else {
        navbar.classList.remove("nav-sticky");
    }
}

window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
})

// back-to-top
var mybutton = document.getElementById("back-to-top");
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        console.log(document.body.scrollTop);
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Feather icon
feather.replace()
