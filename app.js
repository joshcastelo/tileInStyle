// Toggle burger menu

const navElements = {
    toggleBtn: document.querySelector('.toggle'),
    navMenu: document.querySelector('.navbar__menuitems'),
};

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

// Introduction Elements

const introElements = {
    sliderImg: document.querySelector('.introduction__img'),
    introImages: [
        'Images/Tile Introduction 2.png',
        'Images/Tile Introduction 1.png'
    ],
};

// Updates introduction image
let index = 0;

let changeIntroImg = setInterval(function(){
    let numImages = introElements.introImages.length;
    index++;
    if(index >= numImages){
        index = 0;
    }
    introElements.sliderImg.src = introElements.introImages[index];
}, 5000);
