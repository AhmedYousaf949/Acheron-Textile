document.addEventListener('DOMContentLoaded', function() {
    const typedTitle = document.getElementById('typed-title');
    if (!typedTitle) return;

    // Texts to type (with HTML for highlight)
    const firstText = 'Home and Medical Manufacturers in Pakistan';
    const secondTextSegments = [
        { text: 'Discover ', html: false },
        { text: 'Premium', html: true, class: 'highlight' },
        { text: ' Textiles', html: false }
    ];
    let showFirst = true;

    // Type plain text
    function typePlain(text, callback) {
        typedTitle.innerHTML = '';
        let i = 0;
        function type() {
            if (i < text.length) {
                typedTitle.innerHTML += text[i];
                i++;
                setTimeout(type, 45);
            } else if (callback) {
                setTimeout(callback, 1200);
            }
        }
        type();
    }

    // Type array of segments (with highlight)
    function typeSegments(segments, callback) {
        typedTitle.innerHTML = '';
        let seg = 0;
        function typeSegment() {
            if (seg < segments.length) {
                let container;
                if (segments[seg].html) {
                    container = document.createElement('span');
                    container.className = segments[seg].class || '';
                } else {
                    container = document.createElement('span');
                }
                let chars = segments[seg].text;
                let j = 0;
                function typeChar() {
                    if (j <= chars.length) {
                        container.textContent = chars.slice(0, j);
                        // Remove previous segment if exists
                        if (typedTitle.children[seg]) {
                            typedTitle.removeChild(typedTitle.children[seg]);
                        }
                        typedTitle.appendChild(container.cloneNode(true));
                        j++;
                        setTimeout(typeChar, 45);
                    } else {
                        seg++;
                        setTimeout(typeSegment, 100);
                    }
                }
                typeChar();
            } else if (callback) {
                setTimeout(callback, 1200);
            }
        }
        typeSegment();
    }

    function swapText() {
        if (showFirst) {
            typePlain(firstText, () => {
                showFirst = false;
                typedTitle.innerHTML = '';
                setTimeout(() => {
                    typeSegments(secondTextSegments, swapText);
                }, 400);
            });
        } else {
            typedTitle.innerHTML = '';
            setTimeout(() => {
                typePlain(firstText, () => {
                    showFirst = true;
                    typedTitle.innerHTML = '';
                    setTimeout(() => {
                        typeSegments(secondTextSegments, swapText);
                    }, 400);
                });
            }, 400);
        }
    }

    swapText();

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
        slidesPerGroup: 1,
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
                document.querySelectorAll('.faq-item').forEach(item => {
                    if(item.contains(this)) {
                        item.classList.toggle('active');
                        item.querySelector('.faq-toggle').textContent = item.classList.contains('active') ? '−' : '+';
                    } else {
                        item.classList.remove('active');
                        item.querySelector('.faq-toggle').textContent = '+';
                    }
                });
            });
        });

        const textarea = document.querySelector('textarea');
        const charCount = document.querySelector('.char-count span');
        textarea.addEventListener('input', function() {
            let remaining = 50 - this.value.length;
            charCount.textContent = remaining >= 0 ? remaining : 0;
        });