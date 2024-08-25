const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
const navLink = document.querySelectorAll('.nav-link')
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
document.addEventListener('DOMContentLoaded', function () {
    let swiperPopular = new Swiper(".popular-container", {
        loop: true,
        spaceBetween: 24,
        slidesPerView: 'auto',
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 3
            },
            1024: {
                spaceBetween: 48
            },
        }
    });
});
let mixerFeatured = mixitup('.featured-content', {
    selectors: {
        target: '.featured-card'
    },
    animation: {
        duration: 300
    }
});
const linkFeatured = document.querySelectorAll('.featured-item')
function activeFeatured() {
    linkFeatured.forEach(l => l.classList.remove('active-featured'))
    this.classList.add('active-featured')
}
linkFeatured.forEach(l => l.addEventListener('click', activeFeatured))
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})
sr.reveal(`.home-title, .popular-container, .features-img, .features-filters`)
sr.reveal(`.home-subtitle`, {delay: 500})
sr.reveal(`.home-elec`, {delay: 600})
sr.reveal(`.home-img`, {delay: 800})
sr.reveal(`.home-car-data`, {delay: 900, interval: 200, origin: 'bottom'})
sr.reveal(`.home-button`, {delay: 1000, origin: 'bottom'})
sr.reveal(`.about-group, .offer-data`, {origin: 'left'})
sr.reveal(`.about-data, offer-img`, {origin: 'right'})
sr.reveal(`.features-map`, {delay:600 ,origin: 'bottom'})
sr.reveal(`.features-card`, {interval: 300})
sr.reveal(`.featured-card, .logos-content, .footer-content`, {interval: 100})









