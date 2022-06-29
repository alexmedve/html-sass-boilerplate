window.addEventListener('load', () => {
    //terms modal
    function redirectToContact() {
        let newUrl = window.location.origin + '/contact.html';
        window.location.replace(newUrl);
    }

    if (localStorage.getItem('cookieConsent') == null) {
        setTimeout(() => {
            document.body.classList.add('u-modal-open');
            document.querySelector('.terms-modal').classList.add('terms-modal--active');
        }, 2500);
    } else if (localStorage.getItem('cookieConsent') == 'false') {
        redirectToContact()
    }

    document.querySelector('.terms-modal__accept').addEventListener('click', () => {
        document.body.classList.remove('u-modal-open');
        document.querySelector('.terms-modal').classList.remove('terms-modal--active');
        localStorage.setItem('cookieConsent', true);
    });

    document.querySelector('.terms-modal__decline').addEventListener('click', () => {
        document.body.classList.remove('u-modal-open');
        document.querySelector('.terms-modal').classList.remove('terms-modal--active');
        localStorage.setItem('cookieConsent', false);
        redirectToContact();
    });
});