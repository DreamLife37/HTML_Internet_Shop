const burgerButton = document.querySelector('.burger-menu-icon')
const menuMobile = document.querySelector('.header__menu-mobile')
const closeMenuButton = document.querySelector('.header__close-menu-mobile')
const overlay = document.querySelector('.overlay')

burgerButton.addEventListener('click', () => {
        menuMobile.className += ' header__menu-mobile--active'
        overlay.className += ' overlay--active'
    }
)
closeMenuButton.addEventListener('click', () => {
        menuMobile.classList.remove("header__menu-mobile--active");
        overlay.classList.remove("overlay--active");
    }
)

overlay.addEventListener('click', () => {
    menuMobile.classList.remove("header__menu-mobile--active");
    overlay.classList.remove("overlay--active");
})
