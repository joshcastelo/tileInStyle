// Toggle burger menu
const navElements = {
    toggleBtn: document.querySelector('.toggle'),
    navMenu: document.querySelector('.navbar__menuitems'),
    navLinks: document.querySelectorAll('.navbar__menuitems__link')
};

navElements.navLinks.forEach(link => link.addEventListener('click', function(){
    navElements.navMenu.classList.remove('navbar__menuitems__show');
    navElements.toggleBtn.classList.add('fa-bars');
    navElements.toggleBtn.classList.remove('fa-xmark')
}))

// a new note

navElements.toggleBtn.addEventListener('click', function(){
    if(!navElements.navMenu.classList.contains('navbar__menuitems__show')){
        navElements.navMenu.classList.add('navbar__menuitems__show');
        navElements.toggleBtn.classList.remove('fa-bars');
        navElements.toggleBtn.classList.add('fa-xmark')
    } else if (navElements.navMenu.classList.contains('navbar__menuitems__show')){
        navElements.navMenu.classList.remove('navbar__menuitems__show');
        navElements.toggleBtn.classList.add('fa-bars');
        navElements.toggleBtn.classList.remove('fa-xmark')
    }
});

const images = [
    'Images/Tile Introduction 2.png',
    'Images/Introduction 3.png'
];

let indexNum = 0;

let changeIntroductionImg = setInterval(function(){
    indexNum += 1;
    if(indexNum > 1){
        indexNum = 0;
    }
    let imageElem = document.querySelector('.introduction__imgcontainer__img');
    imageElem.src = images[indexNum]
}, 5000);