const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

//click on the btn
for (let btn of infoBtns) {
    btn.addEventListener('click', showHint);
}

function showHint(e) {
    e.stopPropagation();
    this.parentNode.querySelector('.info-hint').classList.toggle('none');

}

//shut hellpers when click to the document

document.addEventListener('click', closeHints);

function closeHints() {
    for (let hint of infoHints) {
        hint.classList.add('none');
    }
}

//Запрет 

for (let hint of infoHints) {
    hint.addEventListener('click', (e) => e.stopPropagation());
}


// Swiper slider

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    freeMode: true,
    slidesPerView: 4,
    spaceBetween: 42,
    // breakpoints
    // breakpoints: {
    //     640: {
    //         slidesPerView: 2,
    //         spaceBetween: 20,
    //     },
    //     768: {
    //         slidesPerView: 4,
    //         spaceBetween: 40,
    //     },
    //     1024: {
    //         slidesPerView: 5,
    //         spaceBetween: 50,
    //     },
    // },

    // Navigation arrows

    navigation: {
        nextEl: '#sliderNext',
        prevEl: '#sliderPrev',
    },

});


// Tabs 

const tabsBtns = document.querySelectorAll("[data-tab]");
const tabsProducts = document.querySelectorAll("[data-tab-value]");

for (let btn of tabsBtns) {

    btn.addEventListener('click', function() {

        //remove class active for all btn
        for (let btn of tabsBtns) {
            btn.classList.remove('tab-controls__btn--active');
        }

        //add active class to currently btn
        this.classList.add('tab-controls__btn--active');




        //Hide unnecessary products and display necessary products
        for (let product of tabsProducts) {
                    //Examination to all products
        if(this.dataset.tab === 'all') {
            product.classList.remove('none');
        } else {
            if(product.dataset.tabValue === this.dataset.tab) {
                product.classList.remove('none');
            } else {
                product.classList.add('none');
            }
        }

        }
        //Update swiper
        swiper.update();
    });
}

//header mobile btn

const mobileNavOpenBtn = document.querySelector("#mobile-nav-open-btn");
const mobileNavCloseBtn = document.querySelector("#close-mobile-nav");
const mobileNav = document.querySelector(".mobile-nav-wrapper");

console.log(mobileNavOpenBtn);
console.log(mobileNav);
console.log(mobileNavCloseBtn);

mobileNavOpenBtn.onclick = function() {
    mobileNav.classList.add('mobile-nav-wrapper--open')
};
mobileNavCloseBtn.onclick = function() {
    mobileNav.classList.remove('mobile-nav-wrapper--open');
}




