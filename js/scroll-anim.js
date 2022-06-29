window.addEventListener('load', () => {
    const title = document.querySelector('h1.animate-title');

    //animations example
    function isInViewport(element, offset = 0) {
        const rect = element.getBoundingClientRect();
        // return (rect.top <= ((window.innerHeight || document.documentElement.clientHeight) - offset)) && rect.bottom > offset;
        return (rect.top <= ((window.innerHeight || document.documentElement.clientHeight) - offset));
    }

    function addClassBasedOnScroll(trigger, element, offset = 0, className) {
        if (isInViewport(trigger, offset)) {
            element.classList.add(className);
        } else {
            element.classList.remove(className);
        }
    }

    function startAllAnimationsInViewport() {
        addClassBasedOnScroll(title, title, 0, 'animate-title--active');
    }

    startAllAnimationsInViewport();

    //throttle scrolling event for performance

    let isScrolling = false;
    document.addEventListener('scroll', () => {
        isScrolling = true;

        scrollLines.forEach(scrollLine => {
            scrollLineHeight(scrollLine, 250);
        });
    });

    setInterval(() => {
        if (isScrolling) {
            isScrolling = false;
            backToTopDisplay();
            startAllAnimationsInViewport();
        }
    }, 200);
});