document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menu-btn");
    const mainNav = document.getElementById("main-nav");
    const secondaryNav = document.getElementById("secondary-nav");
    const siteHeader = document.getElementById("site-header");

    // sticky header
    document.addEventListener("scroll", function() {
        if(window.scrollY > 0){
            siteHeader.classList.add("sticky");
        } else {
            siteHeader.classList.remove("sticky");
        }
    });

    // ouvrir/fermer menu avec bouton
    menuBtn.addEventListener("click", function(event) {
        event.stopPropagation(); // empêche le clic de se propager au document
        mainNav.classList.toggle("open");
        secondaryNav.classList.toggle("open");
    });

    // fermer menu si clic en dehors
    document.addEventListener("click", function(event) {
        if (!mainNav.contains(event.target) &&
            !secondaryNav.contains(event.target) &&
            !menuBtn.contains(event.target)) {
            mainNav.classList.remove("open");
            secondaryNav.classList.remove("open");
        }
    });
});





// swiper

const swiper = new Swiper('.slide-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
        slidesPerView: 1
    },
    
   620: {
        slidesPerView: 1
    },

    1024: {
        slidesPerView: 2
    },
    1424: {
        slidesPerView: 3
    }
  }

});