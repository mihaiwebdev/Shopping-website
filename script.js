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

