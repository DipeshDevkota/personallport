document.addEventListener('DOMContentLoaded', function () {
    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    gsap.registerPlugin(ScrollTrigger);

    var tl = gsap.timeline();

    tl.from(".container, .navbar-brand, .offcanvas-body li a", {
        y: -20,
        opacity: 0,
        delay: 0.3,
        duration: 1,
        stagger: 0.15,
    });
});
