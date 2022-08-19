// Mobile Hamburger
const hamburger = document.querySelector('.hamburger');
const hamburgerUl = document.querySelector('.hamburger-ul');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('close');
    if (hamburger.classList.contains('close')) {
        hamburgerUl.classList.add('show')
    } else {
        hamburgerUl.classList.remove('show')
    }

})


// Scroll events
const navbar = document.querySelector('.nav-row');
const hero = document.querySelector('.header-content');
const sectionA = document.getElementById('home-a');
const sectionB = document.getElementById('home-b');
const sectionC = document.getElementById('home-c');
const sectionD = document.getElementById('home-d');
const sectionE = document.getElementById('home-e');
const mapOne = document.querySelector('.map-1');
const mapTwo = document.querySelector('.map-2');
const mapThree = document.querySelector('.map-3');
const contact = document.getElementById('contact');
const footer = document.getElementById('footer');



function showDOMElements(el) {
    if (el >= sectionA.offsetTop) {
        sectionA.classList.add('show');
    }
    if (el >= sectionB.offsetTop + 200) {
        sectionB.classList.add('show');
    }
    if (el >= sectionC.offsetTop + 200) {
        sectionC.classList.add('show');
    }
    if (el >= sectionD.offsetTop + 200) {
        sectionD.classList.add('show');
    }
    if (el >= sectionE.offsetTop + 200) {
        sectionE.classList.add('show');
    }
    if (el >= mapOne.offsetTop + 200) {
        mapOne.classList.add('show');
    }
    if (el >= mapTwo.offsetTop + 200) {
        mapTwo.classList.add('show');
    }
    if (el >= mapThree.offsetTop + 200) {
        mapThree.classList.add('show');
    }
    if (el >= contact.offsetTop) {
        contact.classList.add('show');
    }

    if (el >= footer.offsetTop + 200) {
        footer.classList.add('show');
    }

};



window.onload = () => {
    navbar.classList.add('show');
    hero.classList.add('show');
    hamburger.classList.add('show');
}
window.addEventListener('scroll', () => {

    const { clientHeight, scrollTop } = document.documentElement;
    const clientScroll = clientHeight + scrollTop;

    showDOMElements(clientScroll);

})

