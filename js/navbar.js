window.addEventListener('load', () => {
    //mobile nav
    const mobileNavButton = document.querySelector('.navbar-mobile__toggle');
    const mobileMenu = document.querySelector('.navbar-mobile__menu-items');
    let moibleNavOpen = false;

    mobileNavButton.addEventListener('click', () => {
        if (!moibleNavOpen) {
            mobileMenu.classList.add('navbar-mobile__menu-items--active');
            mobileNavButton.classList.add('navbar-mobile__toggle--active');
            moibleNavOpen = true;
        } else {
            mobileMenu.classList.remove('navbar-mobile__menu-items--active');
            mobileNavButton.classList.remove('navbar-mobile__toggle--active');
            moibleNavOpen = false;
        }
    });

    const mobileCloseButton = document.querySelector('.navbar-mobile__toggle--mobiile-close');
    mobileCloseButton.addEventListener('click', () => {
        if (!moibleNavOpen) {
            mobileMenu.classList.add('navbar-mobile__menu-items--active');
            mobileNavButton.classList.add('navbar-mobile__toggle--active');
            moibleNavOpen = true;
        } else {
            mobileMenu.classList.remove('navbar-mobile__menu-items--active');
            mobileNavButton.classList.remove('navbar-mobile__toggle--active');
            moibleNavOpen = false;
        }
    });
});