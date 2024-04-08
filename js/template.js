function navSearch() {

}

const header = document.querySelector('header');
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    if(scrollPosition > 0) {
        header.classList.add('scrolled');
    }
    else {
        header.classList.remove('scrolled');
    }
})


// Nav bar current page link
var currentUrl = window.location.href;
var navLinks = document.querySelectorAll('.header-nav nav a');
navLinks.forEach(function(link) {
    if (link.href === currentUrl) {
        link.classList.add('current');
    }
});

// Function to toggle navigation links when hamburger menu is clicked
function toggleNav() {
    var nav = document.querySelector('.header-nav');
    nav.classList.toggle('collapsed');
}

// Add event listener to hamburger menu
document.querySelector('.hamburger-menu').addEventListener('click', toggleNav);