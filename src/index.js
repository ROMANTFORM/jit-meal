
import './styles/main.scss';


// Burger-menu =======================================================
const headerMenu = document.querySelector('.header__menu');
const burgerMenu = document.querySelector('.menu__icon');
burgerMenu.addEventListener('click', () => {
    
    headerMenu.classList.toggle('_active');
    burgerMenu.classList.toggle('_active');
});
// ====================================================================



// Навигация по сайту  =================================================
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(evt) {
        evt.preventDefault();
        const menuLink = evt.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top

            window.scrollTo({
                top: gotoBlockValue,
                begavior: 'smooth'
            });
        };
    };
};

// ====================================================================


// Выпадалка ответов ==================================================
const btnsCards = document.querySelectorAll('.questions__card-icon');

const getText = (ind) => {
    const texts = document.querySelectorAll('.questions__card-text');
    const btns = document.querySelectorAll('.questions__card-icon');
    // console.log(texts[ind])
    texts[ind].classList.toggle('_active');
    btns[ind].classList.toggle('_active');
};

btnsCards.forEach((btn, index) => {   
btn.addEventListener('click', () => { getText(index) });  
});
// =========================================================================
