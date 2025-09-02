document.addEventListener('DOMContentLoaded', function() {
    new Typed('#typed-title', {
        strings: [
            'Discover <span class="highlight">Premium</span><br><span class="highlight accent">Textiles</span>'
        ],
        typeSpeed: 45,
        showCursor: false,
        smartBackspace: false,
        contentType: 'html'
    });

    // Testimonials Swiper initialization (2 slides per view, swipe one by one)
    new Swiper('.testimonials-swiper', {
        slidesPerView: 2,
        spaceBetween: 24,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.testimonials-section .swiper-button-next',
            prevEl: '.testimonials-section .swiper-button-prev',
        },
        slidesPerGroup: 1, // Swipe one by one
        breakpoints: {
            900: { slidesPerView: 1, spaceBetween: 12 },
        }
    });

    var bgSwiper = new Swiper('.main-card-bg-swiper', {
        effect: 'fade',
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: true
        },
        allowTouchMove: false,
        fadeEffect: { crossFade: true }
    });

    function setHeroBg() {
        var activeSlide = document.querySelector('.main-card-bg-swiper .swiper-slide-active img');
        if (activeSlide) {
            document.querySelector('.main-card-hero').style.backgroundImage =
                'linear-gradient(rgba(255,255,255,0.85),rgba(255,255,255,0.85)), url(' + activeSlide.src + ')';
        }
    }
    bgSwiper.on('slideChangeTransitionEnd', function() {
        setHeroBg();
    });
    setHeroBg();
    new Swiper('.featured-products-swiper', {
        slidesPerView: 4,
        spaceBetween: 32,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1200: { slidesPerView: 4 },
            900: { slidesPerView: 3 },
            600: { slidesPerView: 2 },
            0: { slidesPerView: 1 }
        }
    });

    // Scroll to Top Button logic
    var swiper = new Swiper('.mySwiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        }
    }
});
    const scrollBtn = document.getElementById('scrollToTopBtn');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', function() {
        document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
        const parent = q.parentElement;
        parent.classList.toggle('active');
    });
});

// Character count for textarea
const textarea = document.querySelector('textarea');
const charCount = document.querySelector('.char-count span');
if (textarea && charCount) {
    textarea.addEventListener('input', function() {
        const max = 50;
        charCount.textContent = Math.max(0, max - textarea.value.length);
    });
}