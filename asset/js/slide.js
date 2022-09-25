// Swiper for welcome page bg

var swiper = new Swiper('.welcome-bg', {

    slidesPerView: 1,
    spaceBetween: 30,
    grapCursor: true,
    loop: true,
    pagination: { el: '.swiper-pagination', },
    autoplay: { delay: 10000, disableOnInteraction: false, },
    pagination: { el: '.swiper-pagination', clickable: true, },
    scrollbar: { el: '.swiper-scrollbar', },
});

// Swiper for review
var swiper = new Swiper(".review", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    slidesPerView: 2,
    spaceBetween: 10,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.right-icon',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    grabCursor: true,
});

// Swiper for best books
var swiper = new Swiper(".best", {
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        794: {
            slidesPerView: 5,
        },
        991: {
            slidesPerView: 6,
        },
        1200: {
            slidesPerView: 7,
        }
    },
    autoplay: {
        delay: 9000,
        disableOnInteraction: false,
    },
    spaceBetween: 10,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    grabCursor: true,
});

// Swiper for new books
var swiper = new Swiper(".new-book-slider", {
    autoplay: {
        delay: 12000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        794: {
            slidesPerView: 5,
        },
        991: {
            slidesPerView: 6,
        },
        1200: {
            slidesPerView: 7,
        }
    },
    spaceBetween: 10,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    grabCursor: true,
});

// Swiper for Writers speech
var swiper = new Swiper(".writer-slider", {
    autoplay: {
        delay: 12000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 10,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    loop: true,
    grabCursor: true,
});

// Swiper for all categories of books
var swiper = new Swiper(".all-book-cat", {
    autoplay: {
        delay: 15000,
        disableOnInteraction: false,
    },
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 10,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    loop: true,
    grabCursor: true,
});

// Swiper for Best Authors
var swiper = new Swiper(".best-seller-slider", {
    autoplay: {
        delay: 12000,
        disableOnInteraction: false,
    },
    direction: 'horizontal',
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        794: {
            slidesPerView: 5,
        },
        991: {
            slidesPerView: 6,
        },
        1200: {
            slidesPerView: 7,
        }
    },
    spaceBetween: 10,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    loop: true,
    grabCursor: true,
});