AOS.init({
    duration: 1000
});

const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    spaceBetween: 30,
    // Flechas de navegación
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        992: {
            slidesPerView: 2
        }
    }
});

// --- Menú hamburguesa ---
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-links a');

if (toggle && nav) {
    toggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        toggle.classList.toggle('active', isOpen);
    });
}

// Cerrar el menú al hacer click en un link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.classList.remove('active');
    });
});

// --- Header ocultar al bajar ---
let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.classList.remove("hide");
        lastScroll = 0;
        return;
    }

    // Si el menú está abierto, no ocultar el header
    if (nav && nav.classList.contains('open')) return;

    if (currentScroll > lastScroll) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }

    lastScroll = currentScroll;
});