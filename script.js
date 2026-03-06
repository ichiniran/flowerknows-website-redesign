/*navbar*/
const navbar = document.querySelector('.navbar');
const sentinel = document.querySelector('#sentinel');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  });

  observer.observe(sentinel);
/*hamburger*/
const hamburger = document.querySelector('.hamburger');
const aside = document.querySelector('#aside');
const asideCont = document.querySelector('.asideCont');
const btnClose = document.querySelector('.btnClose');

/*เปิด/ปิด sidebar ด้วย hamburger*/
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  aside.classList.toggle('active');
  asideCont.classList.toggle('active');
});

/*คลิก overlay ปิด sidebar*/
aside.addEventListener('click', (e) => {
  if (e.target === aside) {
    hamburger.classList.remove('active');
    aside.classList.remove('active');
    asideCont.classList.remove('active');
  }
});

/*คลิกปิด sidebar*/
btnClose.addEventListener('click', (e) => {
  e.preventDefault();  
  hamburger.classList.remove('active');
  aside.classList.remove('active');
  asideCont.classList.remove('active');
});



/*เมาส์นางฟ้า*/
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
});


/*sidebar*/
document.querySelectorAll('.shop').forEach(shop => {
    const toggleBtn = shop.querySelector('.toggle-btn');
    const textDiv = shop.querySelector('div:first-child');
    const targetMenuId = toggleBtn.getAttribute('data-target');
    const targetMenu = document.getElementById(targetMenuId);

    [toggleBtn, textDiv].forEach(element => {
        element.addEventListener('click', () => {
            // ปิดเมนูอื่นๆ
            document.querySelectorAll('.slidmenu').forEach(menu => {
                if (menu !== targetMenu) {
                    menu.classList.remove('active');
                }
            });
            document.querySelectorAll('.toggle-btn').forEach(btn => {
                if (btn !== toggleBtn) {
                    btn.classList.remove('active');
                }
            });

            // สลับสถานะ active
            targetMenu.classList.toggle('active');
            toggleBtn.classList.toggle('active');
        });
    });
});


document.querySelectorAll('.search-input').forEach(input => {
    const deleteBtn = input.closest('.searchbox').querySelector('.del.mop');

    // ตรวจสอบการพิมพ์
    input.addEventListener('input', () => {
        if (input.value.trim() !== '') {
            deleteBtn.classList.add('active');
        } else {
            deleteBtn.classList.remove('active');
        }
    });

    /*คลิกไอคอน delete เพื่อล้าง input*/
    deleteBtn.addEventListener('click', () => {
        input.value = '';
        deleteBtn.classList.remove('active');
        input.focus(); 
    });
});

/*Banner*/ 
const mainSwiper = new Swiper('.banner-swiper', {
  loop: true,
  speed: 600,
  slidesPerGroup: 1,
  pagination: {
  el: '.swiper-pagination',
  clickable: true,
},

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});



/*Best Seller*/
  var bestsellerSwiper = new Swiper(".bestseller-slider", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: false,
  breakpoints: {
  0: { slidesPerView: 3,spaceBetween: 8 },
  768: { slidesPerView: 3,spaceBetween: 8 },
  1024: { slidesPerView: 5,  spaceBetween: 20 }
  },
  navigation: {
    nextEl: '.bestseller-slider-next',
    prevEl: '.bestseller-slider-prev',
  }
});

/*New Product*/
var newproductSwiper = new Swiper(".newproduct-slider", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: false,
  breakpoints: {
  0: { slidesPerView: 3,spaceBetween: 8 },
  768: { slidesPerView: 3,spaceBetween: 8 },
  1024: { slidesPerView: 5,  spaceBetween: 20 }
  },
  navigation: {
    nextEl: '.newproduct-slider-next',
    prevEl: '.newproduct-slider-prev',
  }
});

/*polaroid*/
var readyToGiftSwiper = new Swiper(".collection-slider", {
  effect: 'fade',
  fadeEffect: { crossFade: true },
  slidesPerView: 1,
  loop: false,
  allowTouchMove: false,
});

// สร้าง swiper ของ polaroid-swiper
var polaroidSwiper = new Swiper(".polaroid-swiper", {
  effect: "fade",
  fadeEffect: { crossFade: true },
  slidesPerView: 1,
  speed: 100,
  spaceBetween: 0,
  loop: false,
  navigation: {
    nextEl: ".polaroid-swiper-next",
    prevEl: ".polaroid-swiper-prev",
  },
  on: {
    slideChange: function () {
      // เมื่อ polaroid-swiper เปลี่ยนสไลด์ ให้เปลี่ยน collection-slider ตาม
      readyToGiftSwiper.slideTo(this.activeIndex);
    },
    slideChangeTransitionStart: function () {
      document.querySelectorAll('.cover').forEach(c => {
        c.style.transition = "transform 0.15s ease-in-out";
        c.style.transform = "translate(-2px, 2px) rotate(-2deg)";
      });
      document.querySelectorAll('.cover-shadow').forEach(c => {
        c.style.transition = "transform 0.15s ease-in-out";
        c.style.transform = "rotate(-2deg) translate(0px, -20px)";
      });
    },
    slideChangeTransitionEnd: function () {
      document.querySelectorAll('.cover').forEach(c => {
        c.style.transition = "transform 0.15s ease-in-out";
        c.style.transform = "translate(0, 0) rotate(0)";
      });
      document.querySelectorAll('.cover-shadow').forEach(c => {
        c.style.transition = "transform 0.15s ease-in-out";
        c.style.transform = "rotate(-3deg) translate(3px, -20px)";
      });
    },
    sliderMove: function () {
      const diff = this.touches.diff;
      document.querySelectorAll('.cover').forEach(c => {
        c.style.transition = "none";
        if (diff < 0) {
          c.style.transform = "translate(-2px, 2px) rotate(-2deg)";
        } else if (diff > 0) {
          c.style.transform = "translate(-2px, 2px) rotate(-2deg)";
        } else {
          c.style.transform = "translate(0, 0) rotate(0)";
        }
      });
      document.querySelectorAll('.cover-shadow').forEach(c => {
        c.style.transition = "none";
        if (diff < 0) {
          c.style.transform = "rotate(-2deg) translate(0px, -20px)";
        } else if (diff > 0) {
          c.style.transform = "rotate(-2deg) translate(0px, -20px)";
        } else {
          c.style.transform = "rotate(-3deg) translate(3px, -20px)";
        }
      });
    },
    touchEnd: function () {
      document.querySelectorAll('.cover').forEach(c => {
        c.style.transition = "transform 0.15s ease-in-out";
        c.style.transform = "translate(0, 0) rotate(0)";
      });
      document.querySelectorAll('.cover-shadow').forEach(c => {
        c.style.transition = "transform 0.15s ease-in-out";
        c.style.transform = "rotate(-3deg) translate(3px, -20px)";
      });
    }
  }
});

/*Gift set*/
  var swiper = new Swiper(".Ready-To-Gift-slider", {
  slidesPerView: 4,
  loop: false,
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 8,
      grid: {
        rows: 2,
        fill: "row"
      }
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 8,
      grid: {
        rows: 2,
        fill: "row"
      }
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
      grid: {
        rows: 1
      }
    }
  }
});

/*about*/
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.about-swipper', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: 'about-swipper .swiper-pagination',
            clickable: true,
        },
        allowTouchMove: window.innerWidth <= 992,
    });

    swiper.update();

    const menuItems = document.querySelectorAll('.menu-item');
    const menuContainer = document.querySelector('.about-menu:not(.d-lg-none)'); // เลือกเฉพาะ container ที่มองเห็น
    const desktopMenuContainer = document.querySelector('.about-menu.d-lg-block');


    menuItems.forEach((item) => {
        // อ่านค่า index จริงจาก data-index
        const slideIndex = parseInt(item.dataset.index);

        item.addEventListener('mouseenter', () => {
            if (window.innerWidth > 500) {
                swiper.slideToLoop(slideIndex);
            }
        });

        item.addEventListener('click', (e) => {
            e.preventDefault();
            swiper.slideToLoop(slideIndex);
        });
    });

    // หยุดเล่นเมื่อเมาส์อยู่บนพื้นที่เมนู (ต้องเช็คทั้งสองเมนู)
    [menuContainer, desktopMenuContainer].forEach(container => {
        if(container) {
            container.addEventListener('mouseenter', () => {
                if (window.innerWidth > 992) swiper.autoplay.stop();
            });
            container.addEventListener('mouseleave', () => {
                if (window.innerWidth > 992) swiper.autoplay.start();
            });
        }
    });


    swiper.on('slideChange', function () {
        const currentIndex = swiper.realIndex;
        // อัปเดต is-active ให้กับเมนูทั้งสองชุด
        menuItems.forEach((item) => {
            const itemIndex = parseInt(item.dataset.index);
            item.classList.toggle('is-active', itemIndex === currentIndex);
        });
    });

    // ตั้งค่า is-active เริ่มต้น
    menuItems.forEach(item => {
        if (parseInt(item.dataset.index) === 0) {
            item.classList.add('is-active');
        }
    });


    window.addEventListener('resize', () => {
        swiper.params.allowTouchMove = window.innerWidth <= 992;
        swiper.update();
    });
});

/*Social*/ 
  var socialSwiper = new Swiper(".social-slider", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 15,
    grabCursor: true,
    allowTouchMove: true,
    autoplay: false,
    effect: 'slide',
  });



















/* document.addEventListener('DOMContentLoaded', function () {
    let socialSwiper;
    if (window.innerWidth > 992) {
        const socialSwiper = new Swiper('.social-slider', {
            loop: true,
            slidesPerView: 4,
            spaceBetween: 15,
            grabCursor: true,
            allowTouchMove: true,
            autoplay: false,
            effect: 'slide',
        });
    }

});*/
