import './style.css'


const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('bg-black/90', 'shadow-lg', 'backdrop-blur-sm');
        header.classList.remove('p-6');
        header.classList.add('p-4');
    } else {
        header.classList.remove('bg-black/90', 'shadow-lg', 'backdrop-blur-sm', 'p-4');
        header.classList.add('p-6');
    }
});


const revealElements = document.querySelectorAll('.reveal-on-scroll');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
});

revealElements.forEach((el) => revealObserver.observe(el));

console.log('Alcateia Airsoft Loaded');


window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('opacity-0');
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }, 500);
    }
});
