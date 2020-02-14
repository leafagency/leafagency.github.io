//function splitScroll() {
//const controller = new ScrollMagic.Controller();

window.onscroll = function () { progressBar() };

function progressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("innerBar").style.width = scrolled + "%";
}