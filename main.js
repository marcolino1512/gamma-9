const navItems = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');
const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxes = document.querySelectorAll('.resume-box');
const portfolioLists = document.querySelectorAll('.portfolio-list');
const portfolioBoxes = document.querySelectorAll('.portfolio-box');

let currentIndex = 0;

function navigateTo(idx) {
    if (idx < 0 || idx >= navItems.length) return;

    document.querySelector('.nav-list li.active').classList.remove('active');
    navItems[idx].classList.add('active');

    cube.style.transform = `rotateY(${idx * -90}deg)`;

    document.querySelector('.section.active').classList.remove('active');
    sections[idx].classList.add('active');

    const middleSections = Array.from(sections).slice(1, -1);
    const anyMiddleActive = middleSections.some(s => s.classList.contains('active'));
    if (anyMiddleActive) {
        sections[4].classList.add('action-contact');
    } else {
        sections[4].classList.remove('action-contact');
    }

    currentIndex = idx;
}

navItems.forEach((nav, idx) => {
    nav.addEventListener('click', () => navigateTo(idx));
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') navigateTo((currentIndex + 1) % navItems.length);
    if (e.key === 'ArrowLeft') navigateTo((currentIndex - 1 + navItems.length) % navItems.length);
});

const typed = new Typed('.multiple-text', {
    strings: ['Programação', 'Automação', 'Front-End', 'Back-End'],
    typeSpeed: 90,
    backSpeed: 70,
    backDelay: 1200,
    loop: true,
});

resumeLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.resume-list.active').classList.remove('active');
        list.classList.add('active');
        document.querySelector('.resume-box.active').classList.remove('active');
        resumeBoxes[idx].classList.add('active');
    });
});

portfolioLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.portfolio-list.active').classList.remove('active');
        list.classList.add('active');
        document.querySelector('.portfolio-box.active').classList.remove('active');
        portfolioBoxes[idx].classList.add('active');
    });
});
