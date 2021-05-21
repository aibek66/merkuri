

const menuIcon = document.querySelector('.navbar-menu-icon');
const navbarMenu = document.querySelector('.navbar-menu');
const navbarLinks = navbarMenu.querySelectorAll('li');

const setBodyStyleHandler = () => {
    if (navbarMenu.classList.contains('clicked')) {
        document.querySelector('body').style.position = 'fixed';
    } else {
        document.querySelector('body').style.position = '';
    }
}

menuIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('clicked');
    menuIcon.classList.toggle('clicked');
    // setBodyStyleHandler();
});

if (window.innerWidth < 992) {
    navbarLinks.forEach(el => {
        el.addEventListener('click', () => {
            navbarMenu.classList.remove('clicked');
            menuIcon.classList.remove('clicked');
            // setBodyStyleHandler();
        });
    });
}

// thumb swiper slider 

const pagItems = document.querySelectorAll('.pag-item');

const pagItemColorChangeHandler = (index) => {
    pagItems.forEach(el => el.classList.remove('active'));
    pagItems[index].classList.add('active');
}

const swiper = new Swiper('.slides', {
    slidesPerView: 1,
    on: {
        activeIndexChange: function (e) {
            pagItemColorChangeHandler(e.activeIndex);
        }
    }
});

pagItems.forEach((el, index) => {
    el.addEventListener('click', () => {
        pagItemColorChangeHandler(index);
        swiper.slideTo(index, 500, false);
    })
})

const swiper2 = new Swiper('.mySwiper2', {
    slidesPerView: 1,
    loop: true,
    navigation: false,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        992: {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        }
    },
});

const teamSlider = new Swiper('.team-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
});