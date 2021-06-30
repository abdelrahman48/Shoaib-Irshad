window.addEventListener('DOMContentLoaded', () => {
    const sliderButton = document.querySelector('.header__menu'),
          menuSVG = document.querySelectorAll('.hamburger__menu .hamburger__item .linkto svg'),
          hamburger = document.querySelector('.hamburger'),
          hamburgerLinks = document.querySelector('.hamburger__links'),
          rightArea = document.querySelector('.right-area'),
          leftArea = document.querySelector('.left-area'),
          switchTheme = document.getElementById('checkbox'),
          activeSection = document.querySelectorAll('.hamburger__menu .hamburger__item'),
          header = document.querySelector('.header'),
          headerSwitch = document.querySelector('.header__switch'),
          themeInfo = document.getElementById(('themeinfo')),
          footer = document.querySelector('.footer__block'),
          hamburgerSwitch = document.querySelector('.header__swt'),
          hamburgerSwitch2 = document.querySelector('.hamburger__swt2'),
          hamburgerButton1 = document.getElementById('13'),
          subLinksItem = document.querySelectorAll('.item-link'),
          subLinksto = document.querySelector('.subLinksto'),
          menuSettings = document.querySelector('.hamburger__item__container'),
          menuLinks = document.querySelector('.hamburger__links'),
          ball = document.getElementById('ball'),
          overlay = document.querySelector('.overlay');



    //change of left and right areas on change size of window
    // window.addEventListener('resize', () => {
    //     if ((window.innerWidth <= 1440) && (window.innerWidth > 768) &&  (hamburger.classList.contains('closed')) ){
    //         rightArea.classList.add('closedMain');
    //         hamburger.classList.add('closed');
    //     } else if ((window.innerWidth <= 1440) && (window.innerWidth > 768) &&  (!hamburger.classList.contains('closed')) ) {
    //         rightArea.style.width = '100%';
    //         leftArea.style.width = '276px';
    //         footerSpace.style.width = '276px';
    //         footerArea.style.width = '100%';
    //     } else if ((window.innerWidth >= 1440) &&  (!hamburger.classList.contains('closed')) ) {
    //         rightArea.style.width = '81.72%';
    //         leftArea.style.width = '18.28%';
    //         footerSpace.style.width = '18.28%';
    //         footerArea.style.width = '81.72%';
    //     } else if ((window.innerWidth >= 1440) &&  (hamburger.classList.contains('closed'))) {
    //         rightArea.style.width = '95.42%';
    //         leftArea.style.width = '4.58%';
    //         footerSpace.style.width = '4.58%';
    //         footerArea.style.width = '95.42%';
    //     } else if ((window.innerWidth <= 768) && (window.innerWidth > 425) &&  (!hamburger.classList.contains('closed')) ) {
    //         rightArea.style.width = '86.26%';
    //         leftArea.style.width = '60px';
    //         footerSpace.style.width = '60px';
    //         footerArea.style.width = '86.26%';
    //     }
    //   }, false);

    //   window.addEventListener('resize', () => {
    //     if ((window.innerWidth <= 768) && (window.innerWidth > 425) && footerArea.classList.contains('nnn')){
    //         footerArea.classList.remove('nnn');
    //     }
    //   }, false);

    if (window.innerWidth >= 426 && window.innerWidth <= 992) {
        overlay.classList.add('active');
    }

      window.addEventListener('resize', () => {
        if ((window.innerWidth <= 768) && (window.innerWidth > 425) && hamburger.classList.contains('closed') && !rightArea.classList.contains('lwr')){
            hamburger.classList.remove('closed');
            hamburger.classList.remove('closedButton');
        }
        if (window.innerWidth >= 426 && window.innerWidth <= 992) {
              overlay.classList.add('active');
        } else {
            overlay.classList.remove('active');
        }
      }, false);

    //sidebar at full-screen between 425px and 768px
    window.addEventListener('resize', () => {
        if ((window.innerWidth <=425 || window.innerWidth>768) && hamburger.classList.contains('closed') && !rightArea.classList.contains('lwr')) {
            // rightArea.classList.add('lwr');
            footer.classList.add('ccc');
        }
    })

    //switch light and dark themes
    themeInfo.addEventListener('change', () => {
        if (document.body.classList.contains('light')) {
            ball.classList.add('dark');
            ball.classList.remove('Light');
        } else {
            ball.classList.add('Light');
            ball.classList.remove('dark');
        }
        document.body.classList.toggle('light')
    })

    // change active page at side-bar
    let elemToPaint = 0;
    activeSection.forEach (item => {
        item.addEventListener ('click', () => {
            elemToPaint = item;
            activeSection.forEach (item => {
                item.classList.remove ('active');
            })
            elemToPaint.classList.add ('active');
        })
    })

    subLinksItem.forEach(item => {
        item.addEventListener('click', () => {
            elemToPaint = item;
            subLinksItem.forEach (item => {
                item.classList.remove ('kkkkk');
            })
            elemToPaint.classList.add ('kkkkk'); 
        })
    })

    //open and close sidebar
    menuSVG.forEach(theMenu => { theMenu.addEventListener('click', menu__slider )});
    sliderButton.addEventListener('click', menu__slider );
    function menu__slider(e) {
        if(e.target.parentElement.classList.contains('linkto') &&
            !hamburger.classList.contains('closed')) return;

        if (window.innerWidth >=425 && window.innerWidth <= 768) {
            if (!(hamburger.classList.contains('closed'))) {
                // rightArea.classList.add('lwr');
                footer.classList.add('ccc');
            } else {
                rightArea.classList.remove('lwr');
                footer.classList.remove('ccc');
            }
        }
        hamburger.classList.toggle('closed');
        hamburger.classList.toggle('closedButton');
        rightArea.classList.toggle('closedMain');
        footer.classList.toggle('closedMain');
        menuSettings.classList.toggle('closed');
        menuLinks.classList.toggle('closed');
        if(hamburger.classList.contains('closed') && subLinksto.classList.contains('oo')) {
            subLinksto.classList.remove('oo');
        }
        if(hamburger.classList.contains('closed')) {
            overlay.classList.remove('active');
        } else  {
            overlay.classList.add('active');
        }
    }

    hamburgerButton1.addEventListener('click', () => {
        subLinksto.classList.toggle('oo');
    })

//open and close side-bar on mobile
hamburgerSwitch.addEventListener ('click', () => {
    if (!hamburger.classList.contains('yyy')) {
        hamburger.classList.add('yyy');
    } else {
        hamburger.classList.remove('yyy');
    }
})

hamburgerSwitch2.addEventListener ('click', () => {
    if (!hamburger.classList.contains('yyy')) {
        hamburger.classList.add('yyy');
    } else {
        hamburger.classList.remove('yyy');
    }
})




// animation (appearing of text)
const animItems = document.querySelectorAll('.anim-items');


if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 20;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active-animation');
            } else if (!animItem.classList.contains('one-time-animation')) {
                animItem.classList.remove('active-animation');
            }
        }
    }
    function offset (el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
}




//scroll wheel on side-bar at height of window below 669px
window.addEventListener('resize', () => {
    if (window.innerHeight<720 && !hamburger.classList.contains('zzz')) {
        hamburger.classList.add('zzz');
        sliderButton.classList.add('kkk');
        hamburgerLinks.classList.add('ooo');
    } else if (window.innerHeight>720 && hamburger.classList.contains('zzz')) {
        hamburger.classList.remove('zzz');
        sliderButton.classList.remove('kkk');
        hamburgerLinks.classList.remove('ooo');
    }
})

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0 && !hamburger.classList.contains('zzz-zzz') && window.innerWidth>426) {
        hamburger.classList.add('zzz-zzz');
        header.classList.add('zzz-ooo');
    } else if (window.pageYOffset === 0 && hamburger.classList.contains('zzz-zzz')){
        hamburger.classList.remove('zzz-zzz');
        header.classList.remove('zzz-ooo');
    }
})


setTimeout(() => {
    if (window.innerHeight<669 && !hamburger.classList.contains('zzz')) {
        hamburger.classList.add('zzz');
        sliderButton.classList.add('kkk');
        hamburgerLinks.classList.add('ooo');
    } else if (window.innerHeight>669 && hamburger.classList.contains('zzz')) {
        hamburger.classList.remove('zzz');
        sliderButton.classList.remove('kkk');
        hamburgerLinks.classList.remove('ooo');
    }
}, 100)











})