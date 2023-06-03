const addEventOnElements = function (elements, eventType, callback){
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}

const box = document.querySelector('[box]');
box.addEventListener('mousemove', (e) => {
    let x = e.offsetX;
    let y = e.offsetY;
    let boxWidth = box.clientWidth;
    let boxHeight = box.clientHeight;
    let moveX = (x - boxWidth/5);
    let moveY = (y - boxHeight/5);
    box.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`
})

box.addEventListener('mouseout', (e)=> {
    box.style.transform=``;
})

const navTogglers = document.querySelectorAll('[data-nav-toggler]');
const navToggleBtn = document.querySelector('[data-nav-toggle-btn]');
const navbar = document.querySelector('[data-navbar]');
const overlay = document.querySelector('[data-overlay]');

const toggleNavBar = function () {
    navbar.classList.toggle('active');
    navToggleBtn.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('nav-active');
}

addEventOnElements(navTogglers, 'click', toggleNavBar);