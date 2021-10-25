/** toggle other links on navigation bar */
let otherLinks = document.getElementById('other-links-toggle');
otherLinks.addEventListener('click', function () {
    document.getElementById(this.dataset.open).classList.toggle('active');
})
/** toggle other links on navigation bar */


/** scroll to top */
let scrollToTop = document.getElementById('scroll-to-top');
scrollToTop.addEventListener('click', function () {
    document.body.scrollTop = 0;            // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})
window.onscroll = function () {
    /** hide the btn when the window's offset is less than 800 */
    if (window.scrollY >= 800) scrollToTop.classList.add('active');
    else scrollToTop.classList.remove('active');
}
/** scroll to top */